import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ErrorMessage = () => {
    const [isUsed, setIsUsed] = useState(false);

    return (
        <div className="div-error">
            <button className="btn-err"><Link to="/">Return to main page</Link></button>
        </div>
    )
}

export default ErrorMessage;