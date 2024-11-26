function Footer() {
    let year = new Date().getFullYear();
    return(
        <footer>
            <p>{year} My Website&reg; </p>
        </footer>
    );
}

export default Footer