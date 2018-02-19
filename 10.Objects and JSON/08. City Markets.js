function cityMarkets(arr){
    let result = new Map()
    for (let str of arr) {
        let [town, item, value] = str.split(/\s*->\s*/)
        let multiply = value.split(/\s*:\s*/)
            .map(s => Number(s))
            .reduce((a, b) => a * b)
        if(result.has(town)){
            if(result.get(town).has(item)){
                result.get(town).set(item, result.get(item) + multiply)

            } else {
                result.get(town).set(item, multiply)
            }

        } else{
            let itemsMap = new Map()
            itemsMap.set(item, multiply)
            result.set(result, itemsMap)

        }
    }
    for (let [key, value] of result) {
        console.log('Town - ' + key)
        for (let [item, sum] of result.get(key)) {
            console.log('$$$' + item + " : " + sum)
        }
    }

}
cityMarkets(['Sofia -&gt; Laptops HP -&gt; 200 : 2000\n' +
'Sofia -&gt; Raspberry -&gt; 200000 : 1500\n' +
'Sofia -&gt; Audi Q7 -&gt; 200 : 100000\n' +
'Montana -&gt; Portokals -&gt; 200000 : 1\n' +
'Montana -&gt; Qgodas -&gt; 20000 : 0.2\n' +
'Montana -&gt; Chereshas -&gt; 1000 : 0.3'])