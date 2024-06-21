

export default function Formvalidation(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
            if (!value || value.length === 0)
                return `${name} field is mandatory`
            else if (value.length < 3 || value.length > 50)
                return `${name} field lenght must be greater then 3 or smaller then 50`
            else
                return ""
        default:
            return ""
    }
}

