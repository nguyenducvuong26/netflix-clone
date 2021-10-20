import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Navigation.module.css";
import netflixLogo from "../../assets/netflix_logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Navigation() {
    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const history = useHistory();

    const openSearchInputHandler = () => {
        setShowSearch(true);
    };

    const closeSearchInputHandler = () => {
        setShowSearch(false);
    };

    const searchInputChangedHandler = (e) => {
        setInputValue(e.target.value);
    };

    const searchInputSubmitHandler = (e) => {
        e.preventDefault();
        const searchValue = inputValue;
        if (searchValue === "") {
            return;
        }
        console.log(searchValue);
        history.push(`/search?q=${searchValue}`);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <React.Fragment>
            <header className={`${classes.header} ${showNav && classes.show}`}>
                <nav className={classes.navigation}>
                    <img
                        src={netflixLogo}
                        alt="netflix-logo"
                        onClick={() => history.push("/")}
                    />
                    <div
                        className={`${classes.search} ${
                            showSearch && classes.showSearch
                        }`}
                        onClick={openSearchInputHandler}
                    >
                        <span>
                            <AiOutlineSearch />
                        </span>
                        {showSearch && (
                            <form onSubmit={searchInputSubmitHandler}>
                                <input
                                    type="text"
                                    placeholder={
                                        window.innerWidth > 768
                                            ? "Movies, TV shows"
                                            : "Search"
                                    }
                                    autoFocus={showSearch}
                                    onChange={searchInputChangedHandler}
                                    onBlur={closeSearchInputHandler}
                                />
                            </form>
                        )}
                    </div>
                </nav>
            </header>
            <div className={classes["navigation-helper"]} />
        </React.Fragment>
    );
}

export default Navigation;
