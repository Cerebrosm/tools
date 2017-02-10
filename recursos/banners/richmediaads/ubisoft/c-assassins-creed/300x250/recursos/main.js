var variableA, variableB, variableC = "";

var gameArray = [
  [
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ]
  ],
  [
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ]
  ],
  [
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ]
  ],
  [
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ],
    [
      ["Letal en las sombras", "Eres un fiero guerrero con la habilidad de pelear en cualquier lado por un propósito justo y honorable, tus habilidades exceden las de cualquier asesino.", "recursos/costume1.png"],
      ["Asesina legendaria", "Asesina con la habilidad de completar los objetivos de manera eficaz y desaparecer a la mínima sospecha sin dejar rastro alguno.", "recursos/costume2.png"]
    ]
  ]
];

$(document).ready(function(){

  $(".sceneA .btn").on("click", function(){

    $(".sceneA").removeClass("animated zoomIn").addClass("animated fadeOutLeft");
    setTimeout(function(){
      $(".sceneA").addClass("hidden");
      $(".sceneB").removeClass("hidden").addClass("animated fadeInRight");
    }, 1000);

  });

  $(".sceneB ul li").on("click", function(){
    // Set variable for sceneB
    variableA = $(this).attr("data-option-value");
    $(".sceneB").removeClass("animated fadeInRight").addClass("animated fadeOutLeft");
    setTimeout(function(){
      $(".sceneB").addClass("hidden");
      $(".sceneC").removeClass("hidden").addClass("animated fadeInRight");
    }, 1000);

  });

  $(".sceneC ul li").on("click", function(){
    // Set variable for sceneC
    variableB = $(this).attr("data-option-value");
    $(".sceneC").removeClass("animated fadeInRight").addClass("animated fadeOutLeft");
    setTimeout(function(){
      $(".sceneC").addClass("hidden");
      $(".sceneD").removeClass("hidden").addClass("animated fadeInRight");
    }, 1000);

  });

  $(".sceneD ul li").on("click", function(){
    // Set variable for sceneB
    variableC = $(this).attr("data-option-value");
    $(".sceneD").removeClass("animated fadeInRight").addClass("animated fadeOutLeft");
    setTimeout(function(){
      $(".sceneD").addClass("hidden");
      $(".sceneE").removeClass("hidden").addClass("animated fadeInRight");

      console.log(gameArray[variableA][variableB][variableC]);
      $("#result-title").html(gameArray[variableA][variableB][variableC][0]);
      $("#result-desc").html(gameArray[variableA][variableB][variableC][1]);
      $("#costume").attr("src",gameArray[variableA][variableB][variableC][2]);
    }, 1000);

  });

});
