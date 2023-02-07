import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goal/goalSlice'
import GoalItem from '../components/GoalItem'
import { createContext } from 'react';

function Dashboard() {
  const navigate = useNavigate()
  const dispatach = useDispatch() 

  const {user} = useSelector( (state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)

  useEffect(()=> {
    if(isError){
      console.log(message)
    }

    if(!user){
      navigate('/login')
    }

    dispatach(getGoals())

    return () => {
      dispatach(reset)
    }
  },[user, navigate, isError, message, dispatach])

  if(isLoading){
    return <Spinner />
  }


  return (
    <>
      <section className='heading'> 
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm/>

      <section className='content'>
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal)=> (
              <GoalItem key={goal._id} goal={goal}/>
            ))}
          </div>
        ) : (<h3>You have not set any goal</h3>) }
      </section>
    </>
  )
}

export default Dashboard
