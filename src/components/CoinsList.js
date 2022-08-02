import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { coinList } from '../config/api';

const CoinsList = () => {
    const [search, setSearch] = useState('');
    const [coins, setCoins] = useState([]);

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            let {data} = await axios.get(coinList())
            setCoins(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default CoinsList;