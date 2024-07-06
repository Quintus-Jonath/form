const { jsPDF } = window.jspdf;

function saveAsPDF() {
    const form = document.getElementById('studentForm');

    if (!form.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
    }

    const doc = new jsPDF();
    let formData = new FormData(form);
    let formText = "";

    formData.forEach((value, key) => {
        formText += `${key}: ${value}\n`;
    });

    doc.text(formText, 10, 10);
    doc.save('student_info.pdf');
}
