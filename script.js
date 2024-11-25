document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");

    // Interacciones específicas para cada opción
    const interactions = {
        "Ventas": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("ventas-table");

            const headers = ["Hora", "Día", "Fecha", "Tipo de Impuesto", "Producto"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { hora: "08:30 AM", dia: "Lunes", fecha: "2024-11-20", impuesto: "IVA 19%", producto: "Laptop" },
                { hora: "11:15 AM", dia: "Martes", fecha: "2024-11-21", impuesto: "IVA 5%", producto: "Cámara" },
                { hora: "02:45 PM", dia: "Miércoles", fecha: "2024-11-22", impuesto: "Exento", producto: "Libro" },
                { hora: "04:10 PM", dia: "Jueves", fecha: "2024-11-23", impuesto: "IVA 19%", producto: "Celular" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Ventas";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Anulaciones": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("anulaciones-table");

            const headers = ["Fecha", "Tipo de Venta", "Valor de la Venta", "Tipo de Tarjeta", "Impuesto"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", tipo_venta: "Venta Directa", valor_venta: "$1,000,000", tipo_tarjeta: "Visa", impuesto: "IVA 19%" },
                { fecha: "2024-11-21", tipo_venta: "Venta a Crédito", valor_venta: "$500,000", tipo_tarjeta: "MasterCard", impuesto: "IVA 5%" },
                { fecha: "2024-11-22", tipo_venta: "Venta Directa", valor_venta: "$1,500,000", tipo_tarjeta: "American Express", impuesto: "Exento" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Anulaciones";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Cierres": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("cierres-table");

            const headers = ["Fecha", "Tipo de Cierre", "Valor Total", "Impuestos"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", tipo_cierre: "Cierre Diario", valor_total: "$10,000,000", impuestos: "$1,900,000" },
                { fecha: "2024-11-21", tipo_cierre: "Cierre Semanal", valor_total: "$35,000,000", impuestos: "$6,500,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Cierres";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Consulta de Saldo": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("saldo-table");

            const headers = ["Fecha", "Saldo"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", saldo: "$15,000,000" },
                { fecha: "2024-11-21", saldo: "$20,000,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Consulta de Saldo";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Configuraciones": () => {
            mainContent.innerHTML = "<h2>Módulo de Configuraciones</h2>";
        },

        "Peticiones, Quejas o Reclamos": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("peticiones-table");

            const headers = ["Fecha", "Nombre", "Teléfono", "Petición", "Queja", "Reclamo"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", nombre: "Juan Pérez", telefono: "3101234567", peticion: "Aumento de cobertura", queja: "Retraso en servicio", reclamo: "Fallas recurrentes" },
                { fecha: "2024-11-21", nombre: "Ana Gómez", telefono: "3017654321", peticion: "Actualización de datos", queja: "", reclamo: "Cobro indebido" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Peticiones, Quejas o Reclamos";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Inventario": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("inventario-table");

            const headers = ["Fecha", "Producto", "Cantidad", "Valor"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", producto: "Laptop", cantidad: 5, valor: "$5,000,000" },
                { fecha: "2024-11-21", producto: "Cámara", cantidad: 10, valor: "$2,000,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Inventario";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },

        "Proveedores": () => {
            mainContent.innerHTML = "";
            const table = document.createElement("table");
            table.classList.add("proveedores-table");

            const headers = ["Fecha", "Nombre", "Teléfono", "Dirección", "Producto", "Precio"];
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");

            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const sampleData = [
                { fecha: "2024-11-20", nombre: "Proveedor A", telefono: "3106547890", direccion: "Calle 123", producto: "Muebles", precio: "$2,000,000" },
                { fecha: "2024-11-21", nombre: "Proveedor B", telefono: "3110987654", direccion: "Calle 456", producto: "Electrodomésticos", precio: "$4,500,000" }
            ];

            sampleData.forEach(rowData => {
                const row = document.createElement("tr");
                Object.values(rowData).forEach(cellData => {
                    const td = document.createElement("td");
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            const title = document.createElement("h2");
            title.textContent = "Módulo de Proveedores";
            mainContent.appendChild(title);
            mainContent.appendChild(table);
        },
    };

    // Evento para las opciones de menú
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", () => {
            const moduleName = option.textContent.trim();
            if (interactions[moduleName]) {
                interactions[moduleName]();
            }
        });
    });
});
