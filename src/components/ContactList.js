import { useState } from "react";

const ContactList = ({data}) => {


    let award =  "🏆"
    let noAward = ""


    const [contacts, setContacts] = useState(data.slice(0,5))


    
    
    const addContact = () =>{

        // let remaining = data.filter((contact)=>{
        //     return !contacts.some((remainingContact)=> remainingContact.id === contact.id)
        // })

        let remaining = data.filter((contact) => {
            return !contacts.includes(contact)}
        )
        
        if(remaining.length === 0){
            return
        }

        let newContacts = [...contacts]

        newContacts.push(remaining[Math.floor(Math.random()* remaining.length)])

        setContacts(newContacts)

        console.log(remaining)

    }

    const sortByName = ()=>{
        let sorted = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
        setContacts(sorted)
    }

    const sortByPopularity = ()=>{
        let sorted = [...contacts].sort((a,b) => b.popularity-a.popularity)
        setContacts(sorted)
    }

    const deleteContact = (contact) => {
            let newArray = [...contacts].filter((element)=>{
                return element.id !==contact.id
            })
            setContacts(newArray)
    }




    return (
        <div>
            <button onClick={addContact}>
            Add Random Contact 
            </button>
            <button onClick={sortByPopularity}>
            Sort By Popularity            
            </button>
            <button onClick={sortByName}>
            Sort By Name            
            </button>
    
        <table>
        <thead>
            <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>

            </tr>
        </thead>
        <tbody>
        {
            contacts.map((contact)=>{
                return(

                    <tr key={contact.id}>
                            <td><img src={contact.pictureUrl} alt="picture"/></td>
                            <td>{contact.name} </td>
                            <td>{parseFloat(contact.popularity).toFixed(2)}</td>
                            <td>{contact.wonOscar ? <p>{award}</p> : <p>{noAward}</p>}</td>
                            <td>{contact.wonEmmy ? <p>{award}</p> : <p>{noAward}</p>}</td>
                            <td><button onClick={()=>deleteContact(contact)}>Delete Contact</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>
        </div>
       
    )
}

export default ContactList