 const Plugin1 = {
    install(Vue) {
        Vue.postLogin = function (url, data, cb) {

            var type = "POST";
            let requestConfig = {
                credentials: "include",
                method: type,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                // mode: "cors",
                // cache: "force-cache"
            };

            if (type == "POST") {
                Object.defineProperty(requestConfig, "body", {
                    value: JSON.stringify(data)
                });
            }

            const response = fetch(url, requestConfig);
            //const responseJson =  response.json();
            response
                .then(res => {
                    return res.text();
                })
                .then(res => {
                    res = JSON.parse(res);
                    // console.log(res);
                    cb(res);
                });
        }

    }
}

export { Plugin1 };
