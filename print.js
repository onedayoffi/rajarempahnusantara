function printInvoice() {
    const invoice = document.getElementById('invoice');
    const options = {
        useCORS: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        scale: 2
    };

    html2canvas(invoice, options).then(canvas => {
        const link = document.createElement('a');
        link.download = 'invoice.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}