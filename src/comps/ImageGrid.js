import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div
                    layout
                    className="img-wrap"
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}>
                    <img src={doc.url} alt="uploaded pic" />
                </motion.div>
            ))}
        </div>
    )
}
export default ImageGrid
