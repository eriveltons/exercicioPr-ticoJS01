const apiPlanetas = 'https://swapi.dev/api/planets/?page=2';

let planetas = fetch(apiPlanetas)
    .then(res => res.json())
    .then(json => {
        console.log(json.results);
        let planetasClimaFrozen = json.results.filter(p => (p.climate.includes('frozen')));
        console.log('Total de Planetas que contém o clima frozen:', planetasClimaFrozen);
        let mapPlanetas = json.results.map((planet, index) => ({
            index: index,
            name: planet.name,
            isTemperate: planet.climate.includes('temperate')
        }));

        let temperatePlanetas = mapPlanetas.reduce((t, p) => {
            if (p.isTemperate) { t++ }
            return t;
        }, 0)
        console.log(`Total de ${temperatePlanetas} planetas que contém o clima temperate.`)
    })
    .catch(error => console.log(error))
    .finally(

    )

async function getPeople(solicitacaoRede) {
    try {
        let r = await
            fetch(solicitacaoRede);

        let pessoas = await r.json();
        console.log('Lista de pessoas existentes no mundo Star Wars:', pessoas.results);

        let pessoasCorPeleVerde =
            pessoas.results.filter(p => (p.skin_color === 'green'));
        console.log('Total de personagens com a cor de pele verde: ', pessoasCorPeleVerde)

        let pessoasMassaMaior100 = pessoas.results.filter(p => (p.mass > 100));
        console.log('Personagens com a massa maior que 100:', pessoasMassaMaior100);

        let quantPessoasAltura180 = pessoas.results.reduce((t, pessoas) => {
            if (pessoas.height >= 180) { t++ }
            return t;
        }, 0)
        console.log('Personagens com a altura maior ou igual a 180:', quantPessoasAltura180);

        let nomePersonagens = pessoas.results.map((pessoas) => (pessoas.name));
        console.log('Nome de todos os personagens:', nomePersonagens)

    } catch (error) {
        console.log(error);
    }
}

getPeople('https://swapi.dev/api/people/?page=2');