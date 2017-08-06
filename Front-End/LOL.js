var nombres = [];
nombres.push("Ashe");
nombres.push("Teemo");
nombres.push("Lux");
nombres.push("Garen");
nombres.push("Kayle");
nombres.push("Morgana");
nombres.push("Miss Fortune");
nombres.push("Maokai");
nombres.push("Nasus");
nombres.push("Akali");
nombres.push("Caitlyn");
nombres.push("Blitzcrank");
nombres.push("Sivir");
nombres.push("Rengar");
nombres.push("Thresh");
var imgs = [];
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ashe.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Teemo.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Lux.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Garen.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Kayle.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Morgana.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/MissFortune.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Maokai.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Nasus.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Akali.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Caitlyn.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Blitzcrank.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Sivir.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Rengar.png");
imgs.push("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Thresh.png");

var bios = ["Con cada flecha que dispara su arco encantado con hielo milenario, Ashe demuestra que es una arquera maestra. Elige a su objetivo con sumo cuidado, espera el momento justo y, entonces, ataca con poder y precisión. Con esta misma perspectiva y concentración persigue su objetivo de unir las tribus del Fréljord para forjar una nación poderosa.",
"Teemo es una leyenda entre sus hermanos y hermanas yordle de la ciudad de Bandle. Por lo que respecta a los yordles, parece que Teemo tiene algún pequeño problema. Aunque disfruta de la compañía de otros yordles, también insiste con frecuencia en realizar misiones en solitario para la defensa de la ciudad de Bandle.",
 "Luxanna, nacida en el seno de la prestigiosa familia Crownguard, un linaje ejemplar al servicio de Demacia, estaba destinada a hacer grandes cosas. Única hija del clan, disfrutó de una educación superior y de las suntuosas fiestas que acostumbraban a celebrar las familias ilustres como la suya.",
 "En todo Valoran, la determinación de los soldados de Demacia se celebra o se desprecia, pero siempre se respeta. Este código moral de ''cero tolerancia'' es defendido de forma estricta tanto por soldados como por civiles. ",
 "En un mundo lejano, donde aún hoy se sigue librando una guerra milenaria, vivía una gran heroína, Kayle, la más fuerte de una raza inmortal entregada a combatir el mal allá donde éste surja. Kayle lleva diez mil años luchando incansablemente por su pueblo, blandiendo su espada llameante forjada antes del amanecer de los tiempos.",
 "Morgana fue una de los muchos que lucharon contra lo que ella consideraba la tiranía de los de su especie, y por ese motivo la tildaron de ''caída''. Morgana no era inocente, ya que había encontrado maneras de obtener poderes prohibidos y convertirse así en una poderosa guerrera de las artes oscuras.",
 "Belleza y peligro: son muy pocos los que pueden igualar a Miss Fortune en tales atributos. Es una de las cazarrecompensas más infames de Aguasturbias, que creó su leyenda sobre un reguero de cadáveres acribillados y holgazanes capturados.",
 "Maokai es un imponente y feroz treant que lucha contra los horrores antinaturales de las Islas de la Sombra. Las ansias de venganza lo inundaron después de que un cataclismo mágico destruyera su hogar, y sobrevive a la podredumbre únicamente por las aguas de vida imbuidas en su duramen.",
 "Nasus es una imponente criatura Ascendida con cabeza de chacal procedente de la antigua Shurima; una figura heroica a la que las gentes del desierto han encumbrado al nivel de semidiós. Poseedor de una increíble inteligencia, fue un guardián del saber y estratega cuya sabiduría guió durante siglos al antiguo imperio de Shurima.",
 "Existe una antigua orden que tiene su origen en las Islas Jonias y que se dedica a conservar el equilibrio. Orden, caos, luz, oscuridad… todas las cosas deben existir en perfecta armonía, ya que así es como funciona el universo.",
 "Bribones y ladrones solían considerar a esta ciudad estado el lugar ideal para saquear, debido a los recursos tan valiosos que se importan para alimentar la investigación tecmatúrgica. Hay quien defiende la teoría de que, de no haber sido por Caitlyn, la Sheriff de Piltóver, la ciudad se habría convertido en la tierra del crimen organizado.",
 "Blitzcrank, un gólem de vapor, fue desarrollada para tomar decisiones de forma inmediata a fin de aligerar el proceso de reciclaje de residuos peligrosos de Zaun, ya que a menudo no era posible que un humano lo supervisara todo. No obstante, pronto empezó a mostrar un comportamiento inesperado.",
 "Sivir es una afamada buscadora de tesoros y capitana mercenaria que se gana la vida en el desierto de Shurima. Provista de un arma legendaria en forma de cruz engastada con gemas, ha luchado y ganado innumerables batallas para aquellos que pueden permitirse su exorbitante precio. ",
 "Distribuidos por todas las paredes de su guarida, el cazador de trofeos Rengar tiene los cuernos, garras, cabezas y colmillos de las criaturas más letales de Valoran. Aunque su colección es enorme, Rengar no está satisfecho y sigue buscando incansablemente presas mayores.",
 "Sádico y astuto, Thresh es un espíritu insomne que se enorgullece de su capacidad para atormentar a los mortales y quebrarlos con parsimoniosa y agónica inventiva. El sufrimiento de sus víctimas va más allá de la muerte, porque Thresh destroza también sus almas encerrándolas en su linterna para toda la eternidad."];
var num = 15;
function generaPerso(num){
	var div = document.createElement("div");
	div.setAttribute("class","section2__div");

	var img = document.createElement("img");
	div.appendChild(img);
	img.setAttribute("class", "section2__img");
	var aux = imgs[num];
	console.log(aux);
	img.setAttribute("src", aux);

	var nom = document.createElement("p");
	div.appendChild(nom);
	nom.setAttribute("class", "section2__nom");
	nom.innerHTML = nombres[num];

	var bio = document.createElement("p");
	div.appendChild(bio);
	bio.setAttribute("class", "section2__bio");
	bio.innerHTML = bios[num];

	var sec = document.getElementById("sec");
	sec.appendChild(div);
}

function generaPersos(){
	for (var i = 0; i < num; i++) {
		generaPerso(i);
	}
}