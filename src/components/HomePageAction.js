import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

function HomePageAction() {
  return (
    <div className='homepage__action'>
      <Link to='/notes/new'>
        <button className='action' type='button' title='Tambah'>
          <BiMessageSquareAdd />
        </button>
      </Link>
    </div>
  );
}

export default HomePageAction;
