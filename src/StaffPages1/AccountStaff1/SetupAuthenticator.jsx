import React from "react";
import "./AccountStaff1.css";

const SetupAuthenticator = () => {
    return (
        <div className="">
            <div className="bodycontent">
                <h1>Configure authenticator app</h1>
                <div className="contents">
                    <p>To use an authenticator app go through the following steps:</p>
                    <p>1.Download a two-factor authenticator app like Microsoft Authenticator for <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Android</a> and <a href="https://apps.apple.com/app/id983156458">iOS</a> or Google Authenticator for <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en">Android</a> and <a href="https://apps.apple.com/us/app/google-authenticator/id388497605">iOS</a>.</p>
                    <p>2. Scan the QR Code or enter this key <mark>jhnb o7mb 5isx gvxv fjwm bc2q g7hm kgqk</mark> into your two factor authenticator app. Spaces and casing do not matter.</p>

                </div>
            </div>
        </div>
    )
}

export default SetupAuthenticator