import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashboard() {
    const navigate = useNavigate(null)
    const [email, setEmail] = useState('')
    const [uid, setUid] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUid(user.uid)
        })
    }, [])

    useEffect(() => {
        if (uid) {
            fetchUser()
        }
    }, [uid])

    const fetchUser = async () => {
        await getDoc(doc(db, 'users', uid))
            .then((res) => {
                setUsername(res.data().username)
                setEmail(res.data().email)
            })
    }

    return (
        <div className="p-10 border w-full h-screen bg-[#212121] flex justify-center items-center">
            <div className='w-[500px] flex flex-col items-start border border-[gray] p-10 rounded-lg shadow shadow-[black] shadow-lg'>
                <p className="mb-10 font-bold text-4xl text-white flex justify-between w-full items-center [text-shadow:_0_0_5px_white]">Dashboard <span className='text-sm font-bold cursor-pointer border border-white px-5 py-1 rounded bg-white text-black' onClick={() => { navigate('/') }}>Home</span></p>
                <div className='border border-[gray] w-full h-[150px] rounded-lg p-10 flex flex-col justify-evenly'>
                    <p className='text-white font-bold'>{username}</p>
                    <p className='text-white font-bold'>{email}</p>
                </div>
            </div>
        </div>
    )
}
