import {mkdir,readFile,writeFile} from 'node:fs/promises';
const lesson=JSON.parse(await readFile(new URL('../public/lesson.json',import.meta.url),'utf8'));
await mkdir(new URL('../narration/',import.meta.url),{recursive:true});
await Promise.all(lesson.shorts.map((item,index)=>writeFile(new URL(`../narration/short-${index+1}.txt`,import.meta.url),`${item.hook}. ${item.body} ${item.cta}`)));
console.log(`Prepared ${lesson.shorts.length} Shorts narration files.`);
