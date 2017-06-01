/*
exercice git à 3
*/


/*
on fait apparaitre les images une par une à chaque click sur le body

	1. on voit s'il y a l image
		1.1 si non => on la fait apparaitre
		1.2 si oui on fait apparaitre la suivante
*/

//création d'une variable pour voir si l'image est affichée
		var i = 1 ;	


		$('body').click(function() {


					$('img' +i).fadeIn(500);
					i++;
				

				
		});