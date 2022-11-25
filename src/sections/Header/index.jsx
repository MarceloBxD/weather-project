import React from 'react'
import * as C from './styles'
import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <C.HeaderContainer>
        <motion.h1 style={{fontSize: "22px", color: "#000"}} animate={{x: 0, x: 600}}>Clima Tempo</motion.h1>
        <C.Avatar src={"https://lh3.googleusercontent.com/ogw/AOh-ky2_4TD3Cmj-4JGrLg3qfQd_nOwZS8kAtHRqWmLnmw=s32-c-mo"}/>
    </C.HeaderContainer>
  )
}
