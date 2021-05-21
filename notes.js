
/*  id (Unique identifier, or primary key)
    subject (What you learned about)
    date (The date you learned it)
    feeling (How you felt when learning it)
    timeSpent (Roughly how long you learned about it, minutes) */

const notes = [
  {
    id: 1,
    subject: "HTML",
    date: "March 01, 2021",
    feeling: "eh",
    timeSpent: 30
  },
  {
    id: 2,
    subject: "CSS",
    date: "March 15, 2021",
    feeling: "OMG",
    timeSpent: 32
  }
]

// console.log(notes)

const noteAboutToday = {
    id: 3,
    subject: "javaScript",
    date: "May 04, 2021",
    feeling: "ohHellNah",
    timeSpent: 100
}

notes.push(noteAboutToday)

// console.log(notes)


// add an object
/* Note 1
2/14/2021
I learned JavaScript Objects.
I spent 124 minutes working on it
I felt frustrated. */

// console log output
/*  for (const note of notes) {
  console.log (`Note ${note.id}
  ${note.date}
  I learned ${note.subject}.
  I spent ${note.timeSpent} hours working on it!
  I felt ${note.feeling}!!
  -----------------------------------------------`)
} */


// add search function
const searchTerm = "ohHellNah"

// for (const note of notes) {
//   if ( note.feeling === searchTerm) {
//     console.log(note)
//   }
// }



// add id to a new object and push to "main" array
const createNote = (note) => {
  
  
  
  

  note.date = createDate()
  // note.id = createNote()
  note.id = getnextId()
  // note.id = idForNewNote 


 
  // add the "object" to the array
  notes.push(note)
}


const getnextId = () => {

  // get index of last item in array
  const lastIndex = notes.length -1  
  // get the last object in the array 
  const currentNote = notes[lastIndex]
  // get id property value of last toy
  const maxID = currentNote.id

  // increase the current max id by 1
  const idForNewNote = maxID + 1

  return idForNewNote 
}




const createDate = () => {
  let today = new Date()
  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  // console.log(today);
  
  return today
}

const moreNewerNote = {
    subject: "Writing new note with no id",
    feeling: "alright",
    timeSpent: 10
}

createNote (moreNewerNote)

console.log(notes)



