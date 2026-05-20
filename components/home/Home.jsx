import React from 'react'
import Header from '../header/Header'
import Recipes from '../recipes/Recipes'
import { useState } from 'react';

export default function Home() {
    const [search, setSearch] = useState('pizza');


  return (
    <>
      <Header setSearch={setSearch}/>
      <Recipes recipe={search}/>
    </>
  )
}
