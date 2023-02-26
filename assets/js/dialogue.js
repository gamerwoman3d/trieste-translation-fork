// Variable pour les dialogues
const dialogs = {
  parapluie: {
    img: 'homme_parapluie.png',
    text: [
      {
        user_talking: false,
        text: 'Get out of here, leave me alone!'
      },
      {
        user_talking: true,
        text: 'Rude.'
      }
    ]
  },
  dame_blanche: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: false,
        text: 'Goodbye everyone, goodbye!! To my greatest regret, I must leave Bordeaux for England. But join me little crab, boarding costs three gold coins!'
      },
      {
        user_talking: true,
        text: 'I do not have a penny, there is no other solution than gold coins?'
      },
      {
        user_talking: false,
        text: 'No, sorry. It seems only gold has value in this world.'
      }
    ]
  },
  dame_blanche_success: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: false,
        text: 'Do you have any change, old crab?'
      },
      {
        user_talking: true,
        text: 'I just got the money, get me on board!'
      }
    ]
  },
  dame_blanche_soldat: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: true,
        text: 'I also have the deposit money, I want to take off.'
      },
      {
        user_talking: false,
        text: 'I only count two gold coins.'
      },
      {
        user_talking: true,
        text: 'Damn!!! Thief, thief! Who is the crook who has struck again!'
      }
    ]
  },
  homme_qui_mange: {
    img: 'homme_qui_mange.png',
    text: [
      {
        user_talking: false,
        text: 'I would give anything to eat good fish...'
      }
    ]
  },
  homme_qui_mange_success: {
    img: 'homme_qui_mange.png',
    text: [
      {
        user_talking: false,
        text: 'I would give anything to eat good fish...'
      },
      {
        user_talking: true,
        text: 'Worry no longer sir, I have everything you need right here.'
      },
      {
        user_talking: false,
        text: 'But how kind. Take a gold coin! If you ever need more, search the beach for the code. It may be right before your eyes.'
      },
      {
        user_talking: true,
        text: 'Thank you, thanks to you I will soon be able to take off.'
      }
    ]
  },
  tram: {
    img: 'tram.png',
    text: [
      {
        user_talking: false,
        text: 'The tram is stuck, help me fix it!'
      },
      {
        user_talking: true,
        text: 'I can fix these gears! Only, my work deserves monetary reward.'
      },
      {
        user_talking: false,
        text: 'Does a gold coin suit you?'
      },
      {
        user_talking: true,
        text: 'Very well ! Show me the problem.'
      }
    ]
  },
  homme_poisson: {
    img: 'homme_poisson.png',
    text: [
      {
        user_talking: false,
        text: 'A fish for a question!'
      },
      {
        user_talking: true,
        text: 'Very well my dear.'
      },
      {
        user_talking: false,
        text: 'The sea sometimes has its color,<br/>And its coast welcomes walkers.<br/>Whether it adorns the finger or the neck,<br/>For a woman she is a jewel.<br/><br/><b>Who is she ?</b>'
      }
    ]
  },
  carosse: {
    img: 'carosse.png',
    text: [
      {
        user_talking: false,
        text: 'Let it go, step aside!!'
      }
    ]
  },
  chien: {
    img: 'chien.png',
    text: [
      {
        user_talking: false,
        text: 'Rrrrrrr... WOOF !'
      },
      {
        user_talking: true,
        text: 'Clap clap !'
      }
    ]
  },
  homme_corde: {
    img: 'homme_corde.png',
    text: [
      {
        user_talking: false,
        text: 'PULL !!!!!'
      }
    ]
  },
  fouet_cheval: {
    img: 'fouet_cheval.png',
    text: [
      {
        user_talking: false,
        text: 'Move, you dirty nag !!'
      },
      {
        user_talking: true,
        text: 'That\'s no way to talk to an old crab!'
      },
      {
        user_talking: true,
        text: 'Ah, you may be talking about your horse...'
      }
    ]
  },
  homme_porte_planche: {
    img: 'homme_porte_planche.png',
    text: [
      {
        user_talking: false,
        text: 'How exhausting. No wonder thieves avoid work for a living!'
      }
    ]
  },
  chevaux: {
    img: 'chevaux.png',
    text: [
      {
        user_talking: false,
        text: 'What is an old crab doing here?'
      },
      {
        user_talking: true,
        text: '...'
      }
    ]
  },
  nageur: {
    img: 'nageur.png',
    text: [
      {
        user_talking: false,
        text: 'Come on, more than 100 meters and I\'m there.'
      }
    ]
  },
  homme_tonneau: {
    img: 'homme_tonneau.png',
    text: [
      {
        user_talking: false,
        text: 'I would like to taste a little of this wine.'
      }
    ]
  },
  homme_riche: {
    img: 'homme_riche.png',
    text: [
      {
        user_talking: false,
        text: 'Madam, is it possible to ask for your hand, you are so gracious. Do you want to go with me?'
      }
    ]
  },
  femme_enfant: {
    img: 'femme_enfant.png',
    text: [
      {
        user_talking: false,
        text: 'Have a good trip ma\'am! Take care of yourself during this long crossing!'
      },
      {
        user_talking: true,
        text: 'Excuse me ma\'am, do you know a way to board without a gold coin?'
      },
      {
        user_talking: false,
        text: 'It\'s impossible old crab. But, men will be kind to you if you give them a nudge.'
      },
      {
        user_talking: true,
        text: 'Thanks very much. I shall see what I can do.'
      }
    ]
  },
  tableau4: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Cast off !!!'
      },
      {
        user_talking: true,
        text: 'What a bargain! I will finally be able to free myself from my destiny by regaining my freedom, but for the moment I have to be discreet so as not to end up on the plate of the sailors.'
      }
    ]
  },
  tableau5: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'The Damned sun burns my eyes. I cannot wait to get out of there and find my little shack under the sea.'
      },
      {
        user_talking: true,
        text: 'On the other hand, this is starting to make me sick. I heard some low mutterings between some members of the crew and it seems that a mutiny is preparing...'
      }
    ]
  },
  tableau6: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'It was inevitable, this mutiny surprised the whole crew. What a bunch of jerks!'
      },
      {
        user_talking: true,
        text: 'The ship suffered a lot of damage...'
      },
      {
        user_talking: true,
        text: 'Holy shit the mast is on fire, I AM SURROUNDED!!! I need to get out of here fast!'
      }
    ]
  },
  tableau7: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Phew! I managed to take shelter in a rowboat at the back of the boat. This dark smoke is in the process of eradicating the whole crew!'
      },
      {
        user_talking: true,
        text: 'The rudder and mast broke. I need to get out of this mess soon!!'
      },
      {
        user_talking: true,
        text: 'Oh, a damn seagull! He looks hungry for crab. I have to find an escape...'
      }
    ]
  },
  tableau8: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Arghhh... the flood is over? But... where am I? Would it be?? Sand??? But that is not possible ?'
      },
      {
        user_talking: true,
        text: 'I must have lost my mind at sea when I tried to escape... So I would have ended up on the coast because of the current?'
      },
      {
        user_talking: true,
        text: 'Damn! There are fishermen everywhere, I have to be stealthy...'
      }
    ]
  },
  outro: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'No ! Don\'t pick me! I am inedible! I\'m just an old branch and my shell is rock hard!'
      },
      {
        user_talking: true,
        text: 'You won\'t get me like this, believe it or not!'
      },
      {
        user_talking: true,
        text: 'Rude!!'
      }
    ]
  }
}

const sound_dialog = new Howl({
  src: ['assets/sounds/' + 'dialog.mp3'],
  loop: true,
  volume: 1
})

// Fonction pour les clicks des dialogs
let data_id = ''
$('[data-dialog-id]').click(function () {
  data_id = $(this).attr('data-dialog-id')

  // On check pour les spécificités
  checkDialogWithObject(data_id)
  showDialog(dialogs[data_id])
});

// Fonction pour vérifier les dialogs en fonction des objets
const checkDialogWithObject = (id) => {
  if(id == 'homme_qui_mange' && nb_fishs >= 1) {
    data_id = 'homme_qui_mange_success'
    nb_fishs--
    nb_coins++
    $('#homme_qui_mange').hide()
    $('#homme_qui_mange').addClass('done')
  }

  if(id == 'dame_blanche' && nb_coins >= 3) {
    data_id = 'dame_blanche_success'
    nb_coins -= 3
    $('#dame_blanche').hide()
    $('#dame_blanche').addClass('done')
  }
}

// Fonction pour afficher et cacher les dialogues
let index_dialog = 0

const showDialog = (dialog) => {
  if(index_dialog == 0) {
    // On affiche l'image si il y en a une pour éviter les erreurs
    if(dialog.img) {
      $('#character').attr("src", "assets/images/dialogs/" + dialog.img)
    }
    $('.dialog_container').fadeIn()
    $('.container').addClass('blur')
    $('.arrow').hide()
    $('.info_container').hide()
  }

  if(dialog.text[index_dialog].user_talking) {
    $('#user').addClass('talking')
    $('#character').removeClass('talking')
  } else {
    $('#character').addClass('talking')
    $('#user').removeClass('talking')
  }

  sound_dialog.play()
  typeAnimation(dialog.text[index_dialog].text)
}

const hideDialog = () => {
  $('.dialog_container').fadeOut()
  $('.container').removeClass('blur')
  showArrow() // Pour garder que celles qu'il faut
  showObjects() // Pour garder que celles qu'il faut
  $('.info_container').fadeIn()

  // Pour éviter les glitchs on enlève l'image du character après la disparition du container de dialog
  // Pas pour la dame blanche car sinon elle disparait en plein dialogue
  if(data_id != 'dame_blanche_success') {
    setTimeout(() => {
      $('#character').attr("src", "")
    }, 500);
  }

  // On remet le crabe pour le chapitre 2
  if(data_id == "dame_blanche_soldat") {
    setTimeout(() => {
      $('#user').attr("src", "assets/images/dialogs/crabe.png")
    }, 1000);
  }

  // On met la flèche pour passer à l'histoire précédente dans le chapitre 2
  let actual_scene = chapitres[chapitreIndex].scenes[sceneIndex]
  if(!actual_scene.arrowLeft && chapitres[chapitreIndex].scenes[sceneIndex + 1] != undefined && sceneIndex != 0) {
    actual_scene.arrowLeft = true
    showArrow()
  }
}

// Fonction pour passer à la prochaine phrase dans le dialogue
const nextDialog = () => {
  index_dialog++
  if(dialogs[data_id].text[index_dialog] == undefined) {
    index_dialog = 0
    hideDialog()

    // On effectu d'autres actions
    nextStep(data_id)
  } else {
    showDialog(dialogs[data_id])
  }
}

// Fonction pour arrêter le son du dialogue
const stopSoundDialog = () => {
  sound_dialog.stop()
}
