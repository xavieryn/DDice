import React, { useEffect } from 'react';
import Spells from './Spells'
import SpellsNo from './SpellsNo'
import AsyncStorageLib from '@react-native-async-storage/async-storage'

    
const RouteHandlerSpells = () => {
    const [spellMap, setSpellMap] = React.useState([])
    
    const onCheckSpell = async () => {
        const result = await AsyncStorageLib.getItem('spellTest');
        if (result !== null) setSpellMap(JSON.parse(result));
    }
    useEffect ( () => {
        onCheckSpell();
    })
    if (spellMap.length < 2) {
        return <SpellsNo/>
    }
    return <Spells/>
     
};

export default RouteHandlerSpells;