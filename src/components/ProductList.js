import React from 'react'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/ShoppingCart';

import image from '../imgs/demo.png'

const tileData = [
    {
        img: image,
        title: '手表',
        author: '￥8888.88',
    },
    {
        img: image,
        title: '手表',
        author: '￥8888.88',
    },
    {
        img: image,
        title: '手表',
        author: '￥8888.88',
    },
    {
        img: image,
        title: '手表',
        author: '￥8888.88',
    }
];

const ProductList = () => {
    return (
        <GridList cellHeight={180}>

            {tileData.map((tile, idx) => (
                <GridListTile key={idx}>
                    <img src={tile.img} alt={tile.title}/>
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>{tile.author}</span>}
                        actionIcon={
                            <IconButton>
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList>
    )
}

export default ProductList