
for (let i = 0; i < filePaths.length; i++) {
  for (let j = i + 1; j < filePaths.length; j++) {
    const fileName1 = filePaths[i].split('\\').pop();
    const fileName2 = filePaths[j].split('\\').pop();
    
    if (fileName1 === fileName2 && !duplicates.includes(filePaths[j])) {
      duplicates.push(filePaths[j]);
    }
  }
}

console.log(duplicates);



