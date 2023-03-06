import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Herobanner = () => {
  return (
    <>
    <div>
        <div>
            <p>Small Text</p>
            <h3>Mid Text</h3>
            <Image src="/Arshad_pic.JPG" height="300" width="300" alt="Hero-Banner-Image"/>
            <div>
                <Link href="/product/id">
                    <button type='button'>Button Text</button>
                </Link>
                <div>
                    <h5>Desc</h5>
                     <p>Description</p></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Herobanner