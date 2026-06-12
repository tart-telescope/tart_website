import fs from 'fs';
import path from 'path';

const blogDir = path.resolve('blog');
const outputPath = path.resolve('src/data/recentPosts.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const frontmatter = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (keyMatch) {
      let value = keyMatch[2].trim();
      if ((value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }
      frontmatter[keyMatch[1]] = value;
    }
  }
  return frontmatter;
}

function getDescription(content) {
  const afterFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n*/, '');
  const beforeTruncate = afterFrontmatter.split('<!-- truncate -->')[0];
  const paragraphs = beforeTruncate.split('\n\n').filter((p) => {
    const trimmed = p.trim();
    return trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('|');
  });
  return paragraphs[0]?.trim().replace(/\n/g, ' ') || '';
}

const posts = [];

const entries = fs.readdirSync(blogDir, { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory()) {
    const indexPath = path.join(blogDir, entry.name, 'index.md');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      const fm = parseFrontmatter(content);
      if (fm.slug && fm.title && fm.date) {
        posts.push({
          id: fm.slug,
          title: fm.title,
          date: fm.date,
          description: getDescription(content),
          permalink: `/blog/${fm.slug}`,
        });
      }
    }
  }
}

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const recent = posts.slice(0, 3);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(recent, null, 2));
console.log(`Generated ${outputPath} with ${recent.length} recent posts`);
