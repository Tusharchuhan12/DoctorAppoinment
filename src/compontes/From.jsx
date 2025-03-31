import React from 'react';

function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "63d0777c-ca08-4b4f-9125-e8edd0c5865c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20" id="Contact">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Get in touch with us for any inquiries or feedback</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Contact Info Column */}
                <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-xl shadow-sm">
                    <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="bg-blue-100 p-2 rounded-full">
                                <img src="msg-icon.png" alt="Message" className="w-6 h-6" />
                            </span>
                            Send us a message
                        </h3>

                        <p className="text-gray-600 md:text-lg">
                            Feel free to reach out through our contact form or find our contact information below.
                            We're here to help with any questions you might have.
                        </p>
                    </div>

                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <span className="bg-white p-2 rounded-lg shadow-sm mt-1">
                                <img src="mail-icon.png" alt="Email" className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Email</h4>
                                <p className="text-gray-600">Contact@tushar</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="bg-white p-2 rounded-lg shadow-sm mt-1">
                                <img src="phone-icon.png" alt="Phone" className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Phone</h4>
                                <p className="text-gray-600">+91 86301168..</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="bg-white p-2 rounded-lg shadow-sm mt-1">
                                <img src="location-icon.png" alt="Location" className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="font-medium text-gray-700">Location</h4>
                                <p className="text-gray-600">Jaspur, Uttrakhand</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Form Column */}
                <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your mobile number"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Enter your message here..."
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                        >
                            Submit Now
                        </button>

                        {result && (
                            <div className={`mt-4 p-4 rounded-lg text-center ${result.includes("Successfully") ?
                                "bg-green-50 text-green-700 border border-green-200" :
                                "bg-blue-50 text-blue-700 border border-blue-200"}`}
                            >
                                {result}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;