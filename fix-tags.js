const fs = require('fs');
const path = require('path');

const files = [
  'src/app/terms/page.tsx',
  'src/app/suburbs/page.tsx',
  'src/app/services/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/booking/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/app/blog/page.tsx',
];

const root = 'c:\\Users\\AnkitDwivedi\\OneDrive\\Desktop\\my-cleaning-app';

for (const file of files) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  const lines = content.split('\n');
  let fixed = false;
  
  for (let i = 0; i < lines.length; i++) {
    // Find lines with open-quote-modal (these are the <button> lines we inserted)
    if (lines[i].includes("open-quote-modal")) {
      // Now find the next </a> and replace with </button>
      for (let k = i + 1; k < Math.min(lines.length, i + 15); k++) {
        if (lines[k].includes('</a>')) {
          lines[k] = lines[k].replace('</a>', '</button>');
          fixed = true;
          console.log(`${file}:${k+1} - fixed </a> -> </button>`);
          break;
        }
        if (lines[k].includes('</button>')) {
          // Already fixed
          break;
        }
      }
    }
  }
  
  if (fixed) {
    fs.writeFileSync(fullPath, lines.join('\n'), 'utf-8');
    console.log(`SAVED: ${file}`);
  }
}

console.log('Done fixing closing tags.');
