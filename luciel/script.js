document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formularioCV");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
        const ocupacion = document.getElementById("ocupacion").value;
        const contacto = document.getElementById("contacto").value;
        const nacionalidad = document.getElementById("nacionalidad").value;
        const nivelIngles = document.querySelector('input[name="ingles"]:checked').value;
        const lenguajes = Array.from(document.getElementById("lenguajes").selectedOptions).map(option => option.value);
        const aptitudes = document.getElementById("aptitudes").value;
        const habilidades = Array.from(document.querySelectorAll('input[name="habilidades"]:checked')).map(checkbox => checkbox.value);
        const perfil = document.getElementById("perfil").value;

     
        const datosFormulario = `Nombre: ${nombre}\nFecha de Nacimiento: ${fechaNacimiento}\nOcupación: ${ocupacion}\nContacto: ${contacto}\nNacionalidad: ${nacionalidad}\nNivel de Inglés: ${nivelIngles}\nLenguajes de Programación: ${lenguajes.join(", ")}\nAptitudes: ${aptitudes}\nHabilidades: ${habilidades.join(", ")}\nPerfil: ${perfil}\n`;

        const blob = new Blob([datosFormulario], { type: "text/plain" });

      
        const url = window.URL.createObjectURL(blob);

      
        const link = document.createElement("a");
        link.href = url;
        link.download = "datos_cv.txt"; 
        link.click();

     
        window.URL.revokeObjectURL(url);
    });
});