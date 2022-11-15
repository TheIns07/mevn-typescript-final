import {connect} from 'mongoose'

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/mevn-database')
        console.log(db.connect.name)
    } catch (error) {
        console.log(error)
    }
    
}