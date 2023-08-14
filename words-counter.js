document.body.style = 'font-family:sans-serif';


let upload = document.createElement('input');
let paragraph = document.createElement('p');
let charCount = document.createElement('p');
let wordCount = document.createElement('p');
let sentenceCount = document.createElement('p');

upload.type = 'file';

upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);

    fr.onload = function () {
        const fileContent = fr.result;
        paragraph.innerHTML = fileContent;

        // Count Of Charachters 
        const charLength = fileContent.length;
        charCount.textContent = `Count Of Charachters: ${charLength}`;

        // Count Of Words
        const words = fileContent.split(/\s+/).filter(word => word !== "");
        const wordLength = words.length;
        wordCount.textContent = `Count Of Words: ${wordLength}`;

        // Counting the number of sentences (simply according to the presence of a point)
        const sentences = fileContent.split(".").filter(sentence => sentence.trim() !== "");
        const sentenceLength = sentences.length;
        sentenceCount.textContent = `Count Of Sentences: ${sentenceLength}`;
    }
});

document.body.append(upload, paragraph, charCount, wordCount, sentenceCount);
