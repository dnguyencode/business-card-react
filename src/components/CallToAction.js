import React from "react";

export default function CallToAction() {
    return (
        <div className="cta">
            <button className="cta--email">
                <i class="fa-solid fa-envelope"></i> Email
            </button>
            <button className="cta--linkedin">
                <i class="fa-brands fa-linkedin"></i> Linkedin
            </button>
        </div>
    )
}