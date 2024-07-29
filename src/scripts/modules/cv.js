export function setupCvDownload() {
    document.getElementById('cv-download').addEventListener('click', function() {
        const url = './src/documents/cv-gabryelFernandes.pdf';
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cv-gabryelFernandes.pdf';

        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
    });
}
