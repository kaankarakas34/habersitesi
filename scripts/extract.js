const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:\\Users\\murat\\.gemini\\antigravity\\brain\\993a4883-5342-4324-876d-31d28d45b389\\.system_generated\\logs\\transcript_full.jsonl';
const outputPath = 'c:\\Users\\murat\\OneDrive\\Desktop\\habersitesi\\data\\master-137-raw.txt';

const rl = readline.createInterface({
  input: fs.createReadStream(transcriptPath),
  crlfDelay: Infinity
});

let foundContent = null;

rl.on('line', (line) => {
  if (line.includes('137') && line.includes('Master') && line.includes('USER_EXPLICIT')) {
    try {
      const parsed = JSON.parse(line);
      if (parsed.content && parsed.content.includes('137')) {
        foundContent = parsed.content;
      }
    } catch (e) {
      // ignore
    }
  }
});

rl.on('close', () => {
  if (foundContent) {
    fs.writeFileSync(outputPath, foundContent, 'utf-8');
    console.log('SUCCESS: Saved master-137-raw.txt, length:', foundContent.length);
  } else {
    console.log('NOT FOUND in transcript.');
  }
});
