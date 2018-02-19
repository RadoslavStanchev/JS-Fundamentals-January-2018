function cityMarkets(input) {
    let map = new Map();

    for(let line of input) {
        let townTokens = line.split(/\s+->\s+/);
        let town = townTokens[0];
        let product = townTokens[1];
        let income = townTokens[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a *b);

        if(! map.has(town)) {
            map.set(town, new Map());
        }
        if(! map.get(town).has(product)) {
            map.get(town).set(product, 0);
        }
        map.get(town).set(product, map.get(town).get(product) + income);
    }

    for(let [town, product] of map) {
        console.log(`Town - ${town}`);

        for(let [product, income] of map.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}
cityMarkets(['Sofia -&gt; Laptops HP -&gt; 200 : 2000\n' +
'Sofia -&gt; Raspberry -&gt; 200000 : 1500\n' +
'Sofia -&gt; Audi Q7 -&gt; 200 : 100000\n' +
'Montana -&gt; Portokals -&gt; 200000 : 1\n' +
'Montana -&gt; Qgodas -&gt; 20000 : 0.2\n' +
'Montana -&gt; Chereshas -&gt; 1000 : 0.3'])