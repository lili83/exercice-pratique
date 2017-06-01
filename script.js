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
		var img = false; 	//on considère qu'elle n'apparait pas


		$('body').click(function() {

			

				//voir si l'image est display none
				if (img === false) {
					$('#html').fadeIn(500);
				}

				
		});