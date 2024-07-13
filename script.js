function generateInvoice() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');

    let name = "";
    let phone = "";
    let address = "";
    let product = "";
    let qty = 0;
    let price = 0;
    let price1 = 0;
    let shipping = 0;
    let additionalPrice = 0; // Variable to hold additional price
    let shopName = "Dulovecakes"; // Default shop name
    let invoiceNo = "10"; // Default invoice number
    let theme = ""; // Default theme

    lines.forEach(line => {
        if (line.startsWith("nama:")) {
            name = line.split(': ')[1];
        } else if (line.startsWith("hp:")) {
            phone = line.split(': ')[1];
        } else if (line.startsWith("alamat:")) {
            address = line.split(': ')[1];
        } else if (line.startsWith("produk:")) {
            product = line.split(': ')[1];
        } else if (line.startsWith("berat:")) {
            try {
                qty = eval(line.split(': ')[1]);
            } catch (e) {
                console.error("Invalid expression for 'berat':", e);
                qty = 0; // Default value in case of error
            }
        } else if (line.startsWith("harga:")) {
            price = parseInt(line.split(': ')[1]);
        } else if (line.startsWith("ongkir:")) {
            shipping = parseInt(line.split(': ')[1]);
        } else if (line.startsWith("toko:")) {
            shopName = line.split(': ')[1];
        } else if (line.startsWith("invoice no:")) {
            invoiceNo = line.split(': ')[1];
        } else if (line.startsWith("tema:")) {
            theme = line.split(': ')[1];
        } else if (line.startsWith("tambah harga:")) {
            additionalPrice += parseInt(line.split(': ')[1]);
        }
    });

    const totalPrice = qty * price / 100 + additionalPrice;
    const grandTotal = totalPrice + price1;

    document.getElementById('billedName').textContent = name;
    document.getElementById('billedPhone').textContent = phone;
    document.getElementById('billedAddress').textContent = address;
    document.getElementById('product').textContent = product;
    document.getElementById('qty').textContent = qty;
    document.getElementById('price').textContent = price.toLocaleString('id-ID');
    document.getElementById('price1').textContent = price1.toLocaleString('id-ID');
    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString('id-ID');
    document.getElementById('shipping').textContent = shipping.toLocaleString('id-ID');
    document.getElementById('grandTotal').textContent = grandTotal.toLocaleString('id-ID');
    document.querySelectorAll('.shop-name').forEach(element => {
        element.textContent = shopName;
    });
    document.getElementById('invoice-number').textContent = `Invoice No. ${invoiceNo}`;

    // Apply theme
    if (theme === "orange") {
        document.querySelectorAll('.shop-name').forEach(element => {
            element.style.color = "#966306";
        });
        document.querySelector('.header').style.borderBottom = "1px solid #cabba0";
        // Change other elements' color to match the theme
        document.querySelectorAll('.invoice-title').forEach(element => {
            element.style.color = "#cb7735";
        });
        document.querySelectorAll('.info').forEach(element => {
            element.style.color = "#cb7735";
        });
        document.querySelectorAll('.billed-to h3').forEach(element => {
            element.style.color = "#cb7735";
        });
        document.querySelectorAll('.invoice-summary span').forEach(element => {
            element.style.color = "#cb7735";
        });
        document.querySelector('.invoice-table th').style.backgroundColor = "#ffebcc"; // Light orange color for table header
    }
}
