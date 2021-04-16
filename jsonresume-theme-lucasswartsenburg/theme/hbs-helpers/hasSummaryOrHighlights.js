export default (summary, highlights, options) => { 
    if (!!(summary || highlights)) {
        return options.fn(this)
    }
    return options.inverse(this);
}