//VALIDACION FORMULARIO REGISTRAR
$(document).ready(function() {

  // Agregar método de validación para RUT 
  $.validator.addMethod("rutChileno", function(value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");

    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }

    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }

    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 

$("#formularioUno").validate({
  rules: {
    rut: {
      required: true,
      rutChileno: true
    },
    nombre:{
      required:true,
    },
    apellido:{
      required:true,
    },
    direccion:{
      required:true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 5,
    },
    password2: {
      required: true,
      minlength: 5,
      equalTo: "#password",
    },
  }, // --> Fin de reglas
  messages: {
    rut: {
      required: "El rut es un campo obligatorio",
      rutChileno: "El formato del rut no es válido"
    },
    nombre:{
      required:'El nombre es obligatorio',
    },
    apellido:{
      required:'El apellido es obligatorio',
    },
    direccion:{
      required:'La dirección es obligatoria',
    },
    email: {
      required: "El email es un campo requerido",
      email: "El email no cumple el formato de un correo",
    },
    password: {
      required: "La contraseña es una campo obligatorio",
      minlength: "Mínimo 5 caracteres",
    },
    password2: {
      required: "Repita la contraseña anterior",
      minlength: "Mínimo 5 caracteres",
      equalTo: "Debe ser igual al campo contraseña",
    },
  },
});
});

//VALIDAR FORMULARIO INGRESAR
$(document).ready(function() {
$("#formularioDos").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 5,
    },
  }, // --> Fin de reglas
  messages: {
    email: {
      required: "El email es un campo requerido",
      email: "El email no cumple el formato de un correo",
    },
    password: {
      required: "La contraseña es una campo obligatorio",
      minlength: "Mínimo 5 caracteres",
    },
  },
});
});

//VALIDAR FORMULARIO MANTENEDOR USER
$(document).ready(function() {
$("#formularioTres").validate({
  rules: {
    id: {
      required: true,
    },
    rut: {
      required: true,
      rutChileno:true,
    },
    nombre: {
      required: true,
    },
    apellido:{
      required:true,
    },
    email:{
      required:true,
      email:true,
    },
    direccion:{
      required:true,
    },
    password:{
      required:true,
      minlength:5,
    },
  }, // --> Fin de reglas
  messages: {
    id: {
      required: "El ID es un campo requerido",
    },
    rut: {
      required: "El rut es una campo obligatorio",
      rut: " RUT no valido",
    },
    nombre: {
      required: "el nombre es un campo obligatorio",
      nombre: "nombre no valido",
    },
    apellido:{
      required:"el apellido es un campo obligatorio",
      apellido:"apellido no valido",
    },
    email:{
      required:"el correo es un campo obligatorio",
      email:"correo no valido",
    },
    direccion:{
      required:"la direccion es un campo obligatorio",
      direccion:"direccion no valida",
    },
    password:{
      required:"la contraseña es un campo obligatorio",
      minlength:"minimo 5 caracteres",
    },
  },
});
});

//VALIDAR FORM MANTENEDOR PROD
$(document).ready(function() {
$("#formulario4").validate({
  rules: {
    id:{
      required:true,
    },
    nombre: {
      required: true,
      
    },
    descripcion:{
      required:true,
      
    },
    precio:{
      required:true,
    },
    descuentosub:{
      required:true,
    },
    descuentof:{
      required:true,
    },
  }, // --> Fin de reglas
  messages: {
    id: {
      required: "El ID es un campo requerido",
    },
    nombre: {
      required: "el nombre es un campo obligatorio",
      
    },
    descripcion:{
      required:"la descripcion es un campo obligatorio",
      
    },
    precio:{
      required:"el precio es un campo obligatorio",
    },
    descuentosub:{
      required:" campo obligatorio",
    },
    descuentof:{
      required:"campo obligatorio",
    },
  },
});
});

//ValidaFORM MANTENEDOR BODEGA
$(document).ready(function() {
$("#formulario5").validate({
  rules: {
    nombre: {
      required: true,
    },
    cantidad: {
      required: true,
      minlength: 1,
    },
  }, // --> Fin de reglas
  messages: {
    nombre: {
      required: "El nombre es un campo requerido",
    },
    cantidad: {
      required: "La cantidad es un campo obligatorio ingrese al menos 1",
      minlength: "Mínimo 1 caracteres",
    },
  },
});
});

//VALIDA DATOS.HTML
$(document).ready(function() {

// Agregar método de validación para RUT 
$.validator.addMethod("rutChileno", function(value, element) {
  // Eliminar puntos y guión del RUT
  value = value.replace(/[.-]/g, "");

  // Validar que el RUT tenga 8 o 9 dígitos
  if (value.length < 8 || value.length > 9) {
    return false;
  }

  // Validar que el último dígito sea un número o una 'K'
  var validChars = "0123456789K";
  var lastChar = value.charAt(value.length - 1).toUpperCase();
  if (validChars.indexOf(lastChar) == -1) {
    return false;
  }

  // Calcular el dígito verificador
  var rut = parseInt(value.slice(0, -1), 10);
  var factor = 2;
  var sum = 0;
  var digit;
  while (rut > 0) {
    digit = rut % 10;
    sum += digit * factor;
    rut = Math.floor(rut / 10);
    factor = factor === 7 ? 2 : factor + 1;
  }
  var dv = 11 - (sum % 11);
  dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

  // Validar que el dígito verificador sea correcto
  return dv === lastChar;
}, "Por favor ingrese un RUT válido."); 

$("#formulario6").validate({
rules: {
  rut: {
    required: true,
    rutChileno: true,
  },
  nombre:{
    required:true,
  },
  apellido:{
    required:true,
  },
  email: {
    required: true,
    email: true,
  },
  direccion:{
    required:true,
  },
  password: {
    required: true,
    minlength: 5,
  },
  password2: {
    required: true,
    equalTo: "#password",
  },
}, // --> Fin de reglas
messages: {
  rut: {
    required: "El rut es un campo obligatorio",
    rutChileno: "El formato del rut no es válido"
  },
  nombre:{
    required: "el nombre es un campo obligatorio",
  },
  apellido:{
    required:"el apellido es un campo obligatorio"
  },
  email: {
    required: "El email es un campo requerido",
    email: "El email no cumple el formato de un correo",
  },
  password: {
    required: "La contraseña es una campo obligatorio",
    minlength: "Mínimo 5 caracteres",
  },
  password2: {
    required: "Repita la contraseña anterior",
    equalTo: "Debe ser igual al campo contraseña",
  },
},
});
});

// Mantenedor de bodega
var categorias = {
  1: ['Comida para perros', 'Juguetes para perros', 'Correas para perros'],
  2: ['Comida para gatos', 'Juguetes para gatos', 'Rascadores para gatos'],
  3: ['Comida para pájaros', 'Juguetes para pájaros', 'Jaulas para pájaros']
};

function actualizarProductos() {
  var categoriaSeleccionada = document.getElementById('categoria').value;
  var productos = categorias[categoriaSeleccionada];

  var productoSelect = document.getElementById('producto');
  productoSelect.innerHTML = ''; // Limpiar las opciones anteriores

  for (var i = 0; i < productos.length; i++) {
    var option = document.createElement('option');
    option.text = productos[i];
    productoSelect.add(option);
  }
}

//Mantenedor de usuario
function generarContrasena() {
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  var longitud = 10;
  var contrasena = '';

  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }

  document.getElementById('password').value = contrasena;
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var toggleIcon = document.querySelector('.toggle-password svg');
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.setAttribute('d', 'M12 7C9.79 7 8 8.79 8 11c0 1.39.81 2.59 1.97 3.16L12 19l2.03-4.84C15.19 13.59 16 12.39 16 11c0-2.21-1.79-4-4-4zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z');
  } else {
    passwordInput.type = "password";
    toggleIcon.setAttribute('d', 'M0 0h24v24H0z" fill="none"/><path d="M12 8C7.03 8 2.81 11.29 1 16c1.81 4.71 6.03 8 11 8s9.19-3.29 11-8c-1.81-4.71-6.03-8-11-8zm0 14c-3.87 0-7-3.13-7-7 0-1.66.59-3.17 1.57-4.35L2.1 4.93l1.41-1.41L4.83 4.1C5.94 3.45 7.44 3 9 3c3.87 0 7 3.13 7 7 0 1.56-.45 3.06-1.1 4.17l2.54 2.54-1.41 1.41-2.54-2.54C15.17 18.41 13.66 19 12 19z');
  }
}