var allQuestions = [
    {
        question: "Selezionare la sentenza corretta riguardo agli alberi di decisione",
        answers:
            ["Possono essere utilizzati solo con features discrete",
                "Possono esprimere qualunque funzione di classificazione",
                "Non presentano problemi di overfitting",
                "Il costo computazionale della predizione è piuttosto elevato"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza ERRONEA riguardo agli alberi di decisione",
        answers:
            ["Possono essere utilizzati solo con features discrete",
                "Il costo computazionale della predizione è molto basso",
                "Hanno una forte tendenza all'overfitting",
                "Possono esprimere qualunque funzione di classificazione"],
        correct: 0
    },
    {
        question: "Nel caso di un albero di decisione con features discrete, cosa si può dire della profondità dell'albero",
        answers:
            [" é minore o uguale al numero delle features",
                "Non si può dire nulla",
                "è minore o uguale al numero delle classe",
                " é sicuramente maggiore del logaritmo in base due del numero di dati"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza errata relativa alle random forest ",
        answers:
            [" Richiedono tecniche opportune per la creazione di alberi di decisione diversi relativi ad uno stesso dataset",
                "Tendono a migliorare l'explainability degli alberi di decisione riducendo l'instabilità nella sezione attributi",
                "Tendono di mitigare il fenomeno dell'overfitting tipico degli alberi di decisione",
                "é una tecnica di apprendimento ad ensamble basata su una combinazione di alberi di decisioni"],
        correct: 1
    },
    {
        question: "AlexNet, la prima rete convoluzionale profonda vincitrice della Image Net competition è stata realizzata in quale anno:",
        answers: ["2012", "1993", "1971", "2019"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza errata riguardo all’apprendimento supervisionato",
        answers:
            ["Richiede la costante supervisione di un esperto durante il training",
                "Può comprendere sia problemi di regressione che di classificazione",
                "Si riferisce all’apprendimento di funzioni basato su esempi di training composto da coppie input-output",
                "La definizione della ground truth può richiedere l’intervento umano ed essere onerosa"],
        correct: 0
    },
    {
        question: "Che cosa si intende con apprendimento supervisionato?",
        answers:
            ["Apprendimento sotto la supervisione diretta di un esperto",
                "Apprendimento che tende a imitare il comportamento di un esperto",
                "Apprendimento che non fa uso di tecniche statistiche o probabilistiche",
                "Apprendimento di funzioni basato su esempi di training composti da coppie input-output"],
        correct: 3
    },
    {
        question: "In che situazioni si parla di apprendimento auto-supervisionato",
        answers:
            ["Quando il modello è in grado di configurare in modo automatico la propria architettura",
                "quando il modello è supposto a contribuire alla creazione di nuovi dati di training",
                "qualora i dati in input possano essere considerati come annotazioni (labels) per guidare l'apprendimento , come nel caso degli autoencoders",
                "Quando l'apprendimento prevede una sinergia tra l'uomo e la macchina"],
        correct: 2
    },
    {
        question: "Quale delle seguenti sentenze relative agli autoencoders è SCORRETTA?",
        answers:
            ["Gli Autoencoders richiedono l’uso di livelli densi",
                "Possono essere utilizzate per la rimozione di rumore (denoising)",
                "L’encoder e il decoder non devono essere necessariamente simmetrici"
                , "La rappresentazione interna prodotta dall’encorder abitualmente ha una dimensione ridotta rispetto a quella di partenza"],
        correct: 0
    },
    {
        question: "Quale delle seguenti sentenze relative agli autoencoders è CORRETTA?",
        answers:
            ["Gli Autoencoders richiedono l’uso di livelli densi",
                "L’encoder e il decoder devono essere strettamente simmetrici",
                "La rappresentazione interna prodotta dall’encorder abitualmente ha una dimensione ridotta rispetto a quella di partenza",
                "E’ una rete neurale che codifica se stessa"],
        correct: 2
    },
    {
        question: "Selezionare la sentenza Scorretta relativa alla backpropagation per reti neurali",
        answers:
            ["Richiede la memorizzazione delle attivazioni di tutti i neuroni della rete durante la forward pass",
                "Ha un costo computazionale paragonabile a quello del calcolo “in avanti” (inference) lungo la rete",
                "Si basa tipicamente su algoritmi di tipo genetico",
                "Tipicamente si effettua solo durante la fase di “training” della rete"],
        correct: 2
    },
    {
        question: "Quale delle seguenti affermazioni relative alla backpropagation è corretta?",
        answers:
            ["Si effettua solo durante il “training”",
                "Viene fatta sia durante la fase di “inference” (calcolo in avanti) che in quella di “training”",
                "E’ molto più costosa, in termini di tempo, del calcolo “in avanti” (inference) lungo la rete",
                "Viene effettuata unicamente lungo le skip connections delle reti residuali, per evitare perdita del gradiente"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza scorretta relativa al campo ricettivo (receptive field) di un neurone di una CNN",
        answers:
            ["Definisce la porzione dell’input che influenza l’attivazione di un determinato neurone",
                "Dipende dalla profondità del layer in cui si trova il neurone e dalle dimensioni e gli strides dei kernel dei layers precedenti",
                "E’ sempre almeno pari alla dimensione spaziale del dato in input",
                "Aumenta rapidamente con l’attraversamento di livelli con downsampling"],
        correct: 2
    },
    {
        question: "Il campo ricettivo (receptive field) di un neurone di una CNN dipende da:",
        answers:
            ["La profondità del layer in cui si trova il neurone e le dimensioni degli strides dei kernel dei layer precedenti",
                "La profondità del layer in cui si trova il neurone e le dimensioni del kernel del layers precedenti, ma non dal loro strides",
                "La dimensione del kernel e il numero dei canali del layer in cui si trova il neurone",
                "Unicamente dalla profondità del layer a cui si trova il neurone"],
        correct: 0
    },
    {
        question: "In quale di questi casi una tecnica di classificazione lineare potrebbe non fornire risultati soddisfacenti:",
        answers: ["Quando le features sono indipendenti tra loro, data la classe",
            "Quando non tutte le features di input sono rilevanti ai fini della classificazione",
            "Quando la classificazione dipende da un confronto tra features",
            "Quando esiste una elevata correlazione tra le features"],
        correct: 2
    },
    {
        question: "Ci sono due dadi, uno normale e uno truccato che restituisce 6 con probabilità 0.5 e gli altri con valori 0.1, Faccio tre lanci con lo stesso dado e osservo un 3, un 6 e un 2. Cosa posso concludere?",
        answers:
            ["La probabilità di usare uno o l’altro dei dadi è esattamente la stessa",
                "Nulla", "E’ più probabile che il dato sia normale",
                "E’ più probabile che il dato sia truccato"],
        correct: 3
    },
    {
        question: "Ci sono due dadi, uno normale e uno truccato che restituisce 6 con probabilità 0.5 e gli altri con valori 0.1, Faccio tre lanci con lo stesso dado e osservo un 3, un 6. Cosa posso concludere?",
        answers:
            ["La probabilità di usare uno o l’altro dei dadi è esattamente la stessa",
                "Nulla",
                "E’ più probabile che il dato sia normale",
                "E’ più probabile che il dato sia truccato"],
        correct: 3
    },
    {
        question: "Un dataset contiene 1/3 di positivi e 2/3 di negativi. La recall del modello è di 2/3, che percentuale dei dati sono Falsi positivi?",
        answers:
            ["2/9", "1/9", "1/3", "Non può essere stabilito"],
        correct: 3
    },
    {
        question: "Un dataset contiene 1/3 di positivi e 2/3 di negativi. La recall del modello è di 2/3, che percentuale dei dati sono Falsi negativi?",
        answers:
            ["2/9", "1/9", "1/3", "Non può essere stabilito"],
        correct: 1
    },
    {
        question: "Cosa si intende con “deep” features?",
        answers:
            ["Features sintetizzate in modo automatico a partire da altre features",
                "Features ottenute mediante utilizzo di sensori ottici di profondità",
                "Features relative a dati in 2 o più dimensioni", "Features soggette a una approfondita supervisione da parte umana"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza corretta relativa alla distribuzione congiunta di probabilità",
        answers:
            ["Non permette il calcolo di eventi condizionali",
                "Non permette di fare nessun tipo di predizione",
                "Non consente una visione distinta delle singole features",
                "Il suo calcolo presenta problemi di scalabilità all’aumentare delle features"],
        correct: 3
    },
    {
        question: "Se un modello calcola una distribuzione di probabilità, aggiungere alla funzione obbiettivo componente tesa a diminuire l’entropia avrà l’effetto di:",
        answers:
            ["Nessun effetto concreto",
                "Focalizzare le scelte sui casi più probabili",
                "Ridistribuire le probabilità in modo più bilanciato tra tutti i casi",
                "Favorire l’uscita da minimi locali"],
        correct: 1
    },
    {
        question: "Se un modello calcola una distribuzione di probabilità, aggiungere alla funzione obbiettivo componente tesa ad aumentare l’entropia avrà l’effetto di:",
        answers:
            ["Contrastare il fenomeno della perdita di gradiente",
                "Focalizzare le scelte sui casi più probabili",
                "Nessun effetto concreto",
                "Ridistribuire le probabilità in modo più bilanciato tra tutti i casi"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza corretta relativa alla crossentropy H(P,Q) tra P e Q",
        answers:
            ["E’ uguale alla divergenza di Kullback-Leibler KL(P,Q) più l’entropia H(P) di P",
                "Misura la log-likelihood di P data la distribuzione Q",
                "Ha un valore massimo quando P=Q",
                "E’ una funzione simmetrica H(P,Q)=H(Q,P)"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza errata relativa alla crossentropy H(P,Q) tra P e Q",
        answers:
            ["E’ uguale alla divergenza di Kullback-Leibler KL(P,Q) più l’entropia H(P) di P",
                "Misura la log-likelihood di Q data la distribuzione P",
                "Ha un valore minimo quando P=Q",
                "E’ una funzione simmetrica H(P,Q)=H(Q,P)"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza ERRATA relativa all’entropia per la distribuzione di probabilità di una variabile aleatoria discreta",
        answers:
            ["Il suo valore è minimo (e uguale a 0) quando le probabilità è tutta concentrata in una classe",
                "Il range del suo valore è tra 0 e log n dove n sono i possibili valori di X",
                "E’ una misura del grado di disordine della variabile aleatoria",
                "Il suo valore è minimo (e uguale a 0) quando le probabilità è equamente distribuita tra tutte le classi"],
        correct: 3
    },
    {
        question: "Il range dell’entropia per la distribuzione di probabilità di una variabile aleatoria discreta è:",
        answers:
            ["Tra 0 e 1", "Tra 0 e log n dove n sono i possibili valori di X", "Tra 0 e infinito", "Tra -1 e 1"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza errata relativa alla derivata della funzione logistica:",
        answers:
            ["E’ una funzione monotona",
                "Tende a 0 quando x tende a meno infinito",
                "Ha il suo massimo in corrispondenza dello 0", "È una funzione simmetrica"],
        correct: 0
    },
    {
        question: "La derivata della funzione logistica σ(x) è:",
        answers:
            ["σ(x)/ σ(1-x)", "σ(x) * (1- σ(x))", "σ(x)/ (1- σ(x))", "σ(x) * σ(1-x)"],
        correct: 1
    },
    {
        question: "Quale funzione di loss è tipicamente utilizzata in una rete neurale per classificazione binaria che utilizza una sigmoid come attivazione finale?",
        answers:
            ["Categorical crossentropy",
                "Absolute error",
                "Binary crossentropy",
                "Mean squared error"], correct: 2
    },
    {
        question: "Quale funzione di loss è tipicamente utilizzata per una rete neurale per classificazione a categorie multiple che utilizza softmax come attivazione finale?",
        answers: ["Binary crossentropy", "Categorical crossentropy", "Absolute error", "Mean squared error"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza corretta:",
        answers:
            ["Una GAN è una rete che permette di generare attacchi per un qualunque modello predittivo",
                "Le GAN hanno una struttura encoder-decoder, simile a quelle di un autoencoder.",
                "Le GAN possono soffrire del fenomeno di “mode collapse”, cioè la tendenza a focalizzare la generazione su un unico o pochi esempi",
                "Le GAN basano il loro training su una funzione di log-likelihood relative ai dati generati"],
        correct: 2
    },
    {
        question: "Il tensore in input di un layer convolutivo 2D ha dimensione (16,16,32). Sintetizzo 8 kernel con dimensione spaziale (3,3), stride 2, nessun padding. Quale sarà la dimensione dell’output?",
        answers:
            ["(7,7,15)", "(8,8,8)", "(7,7,8)", "(8,8,32)"],
        correct: 2
    },
    {
        question: "Il tensore in input di un layer convolutivo 2D ha dimensione (32,32,8). Sintetizzo un kernel con dimensione spaziale (4,4), stride 2, nessun padding. Quale sarà la dimensione dell’output?",
        answers:
            ["(16,16,1)", "(16,16,8)", "(15,15,8)", "(15,15,1)"],
        correct: 3
    },
    {
        question: "Un layer convolutivo 2D con stride 1, kernel size (3x3) e senza padding prende in input un layer con dimensioni (32,32,3) e restituisce un layer di dimensioni (32,32,16). Quanti sono i suoi parametri?",
        answers:
            ["160", "28", "432", "448"],
        correct: 3
    },
    {
        question: "Il numero dei parametri di un layer convolutivo dipende da:",
        answers:
            ["Unicamente dalle dimensioni dei layers di input e output",
                "Lo stride del kernel e tutte le dimensioni di input e output, compresi i canali",
                "La dimensione spaziale del kernel e il numero dei canali di input e output",
                "Lo stride del kernel e le dimensioni spaziali di input e output"],
        correct: 2
    },
    {
        question: "Selezionare la sentenza SCORRETTA relativa ai Long-Short Term Memory Models (LSTMs)",
        answers:
            ["Utilizzano delle particolari porte (gates) per gestire l’evoluzione della cella di memoria durante l’elaborazione di una sequenza di dati",
                "Sono una particolare tipologia di Rete Ricorrente",
                "Sono prevalentemente utilizzati per l’elaborazione di sequenze di dati",
                "Sono prevalentemente utilizzati per la segmentazione di immagini mediche"],
        correct: 3
    },
    {
        question: "I Long-Short-Term Memory Models(LSTMs) sono modelli utilizzati prevalentemente per:",
        answers:
            ["Segmentazione per immagini mediche",
                "Elaborazione di sequenze di dati",
                "Prevedere traiettorie per agenti a guida autonoma",
                "Elaborazione di immagini"],
        correct: 1
    },
    {
        question: "Quale è la derivata della funzione di MaxPooling",
        answers:
            ["L’identità",
                "Non è una funzione derivabile",
                "1 in corrispondenza del massimo e 0 altrove",
                "1 ovunque"],
        correct: 2
    },
    {
        question: "Quale è l’effetto tipico dell’aumento della dimensione del minibatch durante il training?",
        answers: ["La Backpropagation è effettuata più frequentemente e l’aggiornamento dei parametri è più accurato",
            "La Backpropagation è effettuata meno frequentemente ma l’aggiornamento dei parametri è più accurato",
            "La Backpropagation è effettuata più frequentemente ma l’aggiornamento dei parametri è meno accurato",
            "La Backpropagation è effettuata meno frequentemente e l’aggiornamento dei parametri è meno accurato"],
        correct: 1
    },
    {
        question: "Quale è l’effetto tipico della riduzione della dimensione del minibatch durante il training?",
        answers: ["La Backpropagation è effettuata più frequentemente e l’aggiornamento dei parametri è più accurato",
            "La Backpropagation è effettuata meno frequentemente ma l’aggiornamento dei parametri è più accurato",
            "La Backpropagation è effettuata più frequentemente ma l’aggiornamento dei parametri è meno accurato",
            "La Backpropagation è effettuata meno frequentemente e l’aggiornamento dei parametri è meno accurato"],
        correct: 2
    },
    {
        question: "Selezionare la sentenza SCORRETTA riguardo ai modelli generativi",
        answers: ["Un tipico esempio di tecnica generativa è Naive-Bayes",
            "Sono modelli che cercano di apprendere la distribuzione di probabilità dei dati",
            "Generative Adversarial Networks, Variational Autoencoders e Diffusion model sono esempi di tecniche generative profonde",
            "Sono modelli meta-teorici rivolti alla automatizzazione della generazione di reti neurali"],
        correct: 3
    },
    {
        question: "Con modelli generativi si intende:",
        answers: ["Il processo di automatizzazione della generazione di reti neurali",
            "Modelli che cercano di apprendere la distribuzione di probabilità dei dati",
            "L’uso di attacchi avversariali allo scopo di aumentare la robustezza dei modelli",
            "L’applicazione di tecniche genetiche al deep learning"],
        correct: 1
    },
    {
        question: "Selezionare la risposta SCORRETTA relativa alla Mutua Informazione I(X,Y) tra due variabili aleatorie X e Y (anche detta Information Gain nel contesto degli Alberi di decisione)",
        answers: ["E’ una funzione simmetrica: I(Y,X) = I(X,Y)",
            "Coincide con l’entropia H(Y|X) di Y dato X",
            "Può essere utilizzata per guidare la selezione degli attributi durante la costruzione di un albero di decisione",
            "Misura il guadagno di informazione su Y dopo aver osservato X"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza ERRATA relativa alla tecnica Naive Bayes",
        answers:
            ["E’ una tecnica di tipo generativo in quanto cerca di determinare la distribuzione delle varie categorie dei dati",
                "Deriva dall’ipotesi teorica semplificativa che le features siano indipendenti tra loro, date le classi",
                "Non può essere utilizzata se le features non sono tra loro indipendenti, date le classi",
                "Fornisce un modo computazionalmente efficiente per approssimare la distribuzione congiunta di probabilità delle features"],
        correct: 2
    },
    {
        question: "Perché la tecnica Naive-Bayes è detta “naive”(ingenua)?",
        answers:
            ["Perché suppone ingenuamente che le features siano indipendenti tra loro, date le classi",
                "Perché suppone ingenuamente che i dati di training rispecchino i dati reali",
                "Perché fornisce un modo semplice ma preciso di calcolare la distribuzione congiunta di probabilità delle features",
                "Perché suppone ingenuamente che la teoria possa avere applicazioni pratiche"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza SCORRETTA relativa ai neuroni artificiali",
        answers:
            ["Un neurone artificiale tipicamente calcola una combinazione lineare dei suoi input , seguita dalla applicazione di una funzione di attivazione non lineare",
                "Il numero dei parametri di un neurone artificiale è lineare nel numero dei suoi input",
                "Un neurone artificiale definisce un semplice modello matematico che simula il neurone biologico",
                "Un neurone artificiale può apprendere qualunque funzione dei suoi input"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza corretta",
        answers:
            ["Il numero dei parametri di un neurone artificiale è quadratico nella dimensione dei suoi inputs",
                "Un neurone artificiale tipicamente calcola una combinazione lineare dei suoi input, seguita dalla applicazione di una funzione di attivazione non lineare",
                "Un neurone artificiale può apprendere qualunque funzione dei suoi input",
                "Un neurone artificiale può apprendere solo funzioni lineari"],
        correct: 1
    },
    {
        question: "Quale delle seguenti tecniche NON può essere utilizzata per contrastare l’overfitting?",
        answers:
            ["Early stopping", "Data augmentation", "Introduzione di dropout layers", "Aggiunta di skip connections"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza SCORRETTA riguardo alla regressione logistica",
        answers:
            ["Permette di associare una probabilità alla predizione della classe",
                "Il calcolo della predizione si basa sulla log-likelihood dei dati di training",
                "La predizione dipende dal bilanciamento dei dati di training rispetto alle classi",
                "I parametri del modello possono essere tipicamente calcolati in forma chiusa, mediamente in una forma esplicita"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza ERRATA riguardo alla regressione logistica",
        answers:
            ["Si basa su una combinazione lineare delle features di input", "La probabilità della predizione cresce se ci si allontana dalla superficie di confine tra le classi",
                "Non dipende dal bilanciamento dei dati di training rispetto alle classi",
                "Nel caso di classificazione binaria, la superficie di confine tra le classi è un iperpiano"],
        correct: 2
    },
    {
        question: "In quali di questi casi la regressione logistica potrebbe essere in difficoltà:",
        answers:
            ["Quando non tutte le features di input sono rilevanti ai fini della classificazione",
                "Quando esiste un elevata correlazione tra le features",
                "Quando la classificazione dipende da un confronto tra le features",
                "Quando le features sono indipendenti tra loro, date la classe"],
        correct: 2
    },
    {
        question: "Riguardo alla regressione multinomiale, selezionare la sentenza corretta tra le seguenti:",
        answers:
            ["Per n features di input e m classi, il numero dei parametri del modello cresce come O(n+m)",
                "Il peso con cui è valutata ogni feature è tipicamente diverso per ogni classe",
                "I pesi delle features sono sempre tutti positivi, i bias possono essere negativi",
                "Per ogni input, esiste almeno una classe con probabilità >0,5"],
        correct: 1
    },
    {
        question: "Riguardo alla regressione multinomiale, selezionare la sentenza ERRATA tra le seguenti:",
        answers:
            ["Il peso con cui è valutata ogni feature è tipicamente diverso per ogni classe",
                "Il peso delle features indica la loro importanza ai fini della classificazione",
                "Per n features di input e m classi, i numero dei parametri del modello è nxm+n",
                "Per ogni input esiste almeno una classe con probabilità >0,5"],
        correct: 3
    },
    {
        question: "Quale di queste reti NON è stata progettata per la classificazione di immagini?",
        answers:
            ["Inception-v3", "U-Net", "VGG19", "ResNet"],
        correct: 1
    },
    {
        question: "Quale è la tipica struttura di una rete neurale per classificazione di immagini?",
        answers:
            ["Solo livelli densi", "Un encoder, seguito da un decoder",
                "Una sequenza alternata di convoluzioni e downsampling , seguita da flattering e pochi livelli densi finali ",
                "Una sequenza di convoluzioni che preservano la dimensione spaziale dell’inut"],
        correct: 2
    },
    {
        question: "Selezionare la sentenza ERRATA relativa alla funzione ReLU(x) (rectified linear unit)",
        answers:
            ["Lei o le sue varianti sono tipicamente utilizzate per i livelli interni delle reti neurali profonde",
                "La sua derivata è una funzione a gradino", "È una funzione monotona non decrescente",
                "Non può essere utilizzata per layer convoluzionali"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza SCORRETTA relativa al problema della scomparsa del gradiente (vanishing gradient)",
        answers:
            ["Se il gradiente tende a zero anche parametri e le attivazioni dei neuroni tendono a zero",
                "Se il gradiente tende a zero i parametri non sono più aggiornati e la rete smette di apprendere",
                "Il problema è mitigato dall'uso di link residuali all'interno della rete",
                "Il problema è fortemente attenuato dall'uso di ReLU (o sue varianti) come funzione di attivazione per livelli nascosti della rete"],
        correct: 0
    },
    {
        question: "Il problema della scomparsa del gradiente (vanishing gradient) si riferisce a una progressiva diminuzione dell’intensità del gradiente, dovuta a",
        answers: ["Backpropagation in reti profonde", "Dati troppo rumorosi o malamente processati",
            "Troppi pochi dati di training a disposizione",
            "Training eccessivamente lungo"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza corretta relativa alla funzione softmax",
        answers:
            ["Non può essere utilizzata nel caso di una classificazione binaria",
                "Restituisce una distribuzione di probabilità sulle classi",
                "Per una data classe, la somma dei valori su tutti gli input di un minibatch è sempre 1",
                "Produce valori compresi nell’intervallo [-1,1]"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza ERRATA relativa alla funzione softmax",
        answers: ["Produce valori compresi nell’intervallo [-1,1]",
            "Generalizza la funzione logistica al caso multiclasse",
            "Per un dato di input, la somma dei suoi valori su tutte le classi è sempre 1",
            "Permette di calcolare una distribuzione di probabilità sulle classi"],
        correct: 0
    },
    {
        question: "Qual è l’effetto di uno stride non unitario (>1) in un layer convolutivo",
        answers:
            ["La dimensione spaziale diminuisce",
                "Nessun effetto speciale, il numero dei canali decresce",
                "La dimensione spaziale aumenta",
                "Nessun effetto spaziale, il numero dei canali aumenta"],
        correct: 0
    },
    {
        question: "Selezionare la sentenza corretta relativa alle tecniche discriminative",
        answers:
            ["Cercano di determinare la distribuzione di probabilità delle varie classi di dati",
                "Si focalizzano sulla definizione delle frontiere di decisione (decision boundaries)",
                "Si applicano per lo più in ambito di apprendimento non supervisionato",
                "Sono tipicamente meno espressive delle tecniche generative"],
        correct: 1
    },
    {
        question: "Cosa si intende con tecniche descriminative",
        answers:
            ["Tecniche tipiche di unsupervised learning che tentano di separare i dati in cluster distinti",
                "Tecniche di classificazione che focalizzano sulla definizione delle frontiere di decisione (decision boundaries)",
                "Tecniche che cercano di discriminare i dati in base alle diverse distribuzioni di probabilità delle varie classi",
                "Tecniche che cercano di identificare gli outliers all’interno dei data set"],
        correct: 1
    },
    {
        question: "Selezionare la sentenza corretta relativa alla tecnica a discesa del gradiente",
        answers:
            ["Permette sempre di individuare il minimo globale, se questo esiste",
                "Il risultato non dipende dalla inizializzazione dei parametri del modello",
                "Può essere applicata solo se la funzione da minimizzare ha una superficie concava",
                "Potrebbe convergere a un minimo locale"],
        correct: 3
    },
    {
        question: "Selezione al sentenza ERRATA relativa alle Transposed Convolutions",
        answers: ["Possono essere interpretate come convoluzioni normali con stride sub-unitario",
            "Sono prevalentemente utilizzate in architetture per Image-to-Image processing, come autoencoders o U-Nets",
            "Sono essenzialmente equivalenti alla applicazione di un livello di unsampling seguito da una convoluzione normale",
            "Richiedono la trasposizione dell’input prima calcolare la convoluzione del Kernel"],
        correct: 3
    },
    {
        question: "Selezionare la sentenza SCORRETTA relativa alla U-Net",
        answers: ["E’ un componente tipico dei modelli generativi a diffusione",
            "E’ spesso impiegata per problemi di segmentazione semantica di immagini",
            "Può essere usata per la rimozione del rumore (denoising) di immagini",
            "Viene spesso utilizzata nell’ambito della classificazione dei generi musicali"],
        correct: 3
    },
    {
        question: "Quale tra i seguenti è un tipico campo di applicazione della U-Net?",
        answers: ["Segmentazione semantica",
            "Generazione musicale",
            "Object Detection",
            "Natural Language Processing"],
        correct: 0
    },
    {
        question: "Quale delle seguenti non è una applicazione tipica degli autoencoders?",
        answers: [
            "Segmentazione di immagini (semantic segmentation)",
            "Rimozione del rumore (denoising)",
            "Riduzione delle dimensioni (dimensionality reduction)",
            "Rilevamento di anomalie (anomaly detection)"
        ], correct: 0
    },

    {
        question: "Selezionare la sentenza scorretta relativa alla backpropagation per reti neurali",
        answers: [
            "È l’algoritmo per il calcolo della derivata parziale della loss rispetto a ogni parametro della rete",
            "Tipicamente, il gradiente viene artificialmente rinforzato ad ogni layer attraversato per contrastare il fenomeno della sua scomparsa (vanishing)",
            "Si riduce a semplici calcoli algebrici facilmente parallelizzabili in strutture di calcolo tipo GPU",
            "L’algoritmo calcola il gradiente un layer alla volta, sfruttando la regola matematica per la derivazione di funzioni composte"
        ], correct: 1
    },

    {
        question: "Selezionare la sentenza errata relativa al learning rate",
        answers: [
            "È una metrica che misura la capacità di apprendimento del modello",
            "Un learning rate alto tipicamente velocizza il training ma potrebbe saltare sopra al minimo",
            "È un iper-parametro che definisce la lunghezza del passo durante la discesa del gradiente",
            "Il learning rate può variare durante il training"
        ], correct: 0
    },

    {
        question: "Componendo due layer Conv2D con stride 1, il primo con kernel 5x5 e il secondo con kernel 3x3 quale sarà il campo ricettivo dei neuroni finali?",
        answers: [
            "7",
            "8",
            "Dipende dal padding",
            "3"
        ], correct: 0
    },

    {
        question: "Ci sono due monete, una normale e una che restituisce testa con probabilità ¾ e croce con probabilità ¼. Faccio due lanci con la stessa moneta e osservo una testa e una croce. Che cosa posso concludere?",
        answers: [
            "Nulla",
            "È più probabile che la moneta sia normale",
            "È più probabile che la moneta sia truccata",
            "La probabilità di usare uno o l’altra moneta è esattamente la stessa"
        ], correct: 1
    },

    {
        question: "Un dataset contiene 2/3 di positivi e 1/3 di negativi. La precisione del modello è 9/10. Che percentuale dei dati totali sono falsi positivi?",
        answers: [
            "1/9",
            "Non può essere stabilito",
            "2/27",
            "1/10"
        ], correct: 1
    },

    {
        question: "Selezionare la sentenza errata relativa alla distribuzione congiunta di probabilità per N variabili aleatorie discrete",
        answers: [
            "È la distribuzione di probabilità di tutte le possibili tuple di valori per le variabili",
            "Richiede il calcolo di un numero esponenziale di parametri",
            "Non permette il calcolo di probabilità condizionali tra le features",
            "Consente il calcolo delle probabilità marginali delle singole features"
        ], correct: 1
    },

    {
        question: "Selezionare le sentenza corretta relativa alla probabilità condizionata P(A|B) tra due eventi A e B",
        answers: [
            "P(A|B) è sicuramente maggiore o uguale di P(A and B)",
            "P(A|B) è sicuramente maggiore o uguale di P(A)",
            "P(A|B) è sicuramente minore o uguale di P(A and B)",
            "P(A|B) è sicuramente minore o uguale a P(A)"
        ], correct: 0
    },

    {
        question: "Una variabile aleatoria discreta con valori a,b e c ha la seguente distribuzione di probabilità: P(a)=1/4, P(b)=1/2, P(c)=1/4. Qual è la sua entropia?",
        answers: [
            "3/2",
            "Log(3)",
            "4/5",
            "5/4"
        ], correct: 0
    },

    {
        question: "Siano date le seguenti distribuzioni di probabilità P e Q: P(0)=3/8, P(1)=1/2, P(2)=1/8 and Q(0)=1/2, Q(1)=1/4, Q(2)=1/4. Quanto vale la crossentropy H(P|Q) tra P e Q?",
        answers: [
            "13/8",
            "3/2+log(3)",
            "5/2-log(3)/2",
            "2"
        ], correct: 0
    },

    {
        question: "Il tensore di input di un layer convolutivo 2D ha dimensione (16,16,8). Sintetizzo 4 kernel con dimensione spaziale (5,5), stride 2, nessun padding (valid mode). Quale sarà la dimensione dell’output?",
        answers: [
            "(6,6,4)",
            "(8,8,8)",
            "(7,7,4)",
            "(7,7,8)"
        ], correct: 0
    },

    {
        question: "Un layer convolutivo 2D con stride 1, kernel size 1x1, e senza padding prende in input un layer con dimensioni (32,32,16) e restituisce un layer di dimensione (32,32,4). Quanti sono i suoi parametri?",
        answers: [
            "2",
            "68",
            "8",
            "64"
        ], correct: 1
    },

    {
        question: "Avendo 5 categorie di dati e 3 features di input booleane, quanti parametri indipendenti devono essere stimati secondo la tecnica Naive Bayes (compresi i priors)",
        answers: [
            "15",
            "16",
            "19",
            "20"
        ], correct: 2
    },

    {
        question: "Quale delle seguenti situazioni non è particolarmente problematica dal punto di vista dell’overfitting?",
        answers: [
            "Avere pochi dati di training",
            "Avere dati molto rumorosi",
            "Disporre di un modello molto espressivo",
            "Effettuare un training molto prolungato"
        ], correct: 1
    },

    {
        question: "Selezionare la sentenza corretta riguardo la regressione logistica",
        answers: [
            "I parametri del modello sono tipicamente calcolati mediante discesa del gradiente",
            "La predizione non dipende dal bilanciamento dei dati di training rispetto alle classi",
            "I parametri del modello possono essere tipicamente calcolati in forma chiusa, mediante una formula esplicita",
            "Il calcolo della predizione non si basa sulla logilikelihood dei dati di training, in quanto si tratta di una tecnica discriminativa"
        ], correct: 0
    },

    {
        question: "Selezionare la sentenza errata relativa alla regressione lineare",
        answers: [
            "Cerca di determinare un iperpiano di separazione tra due categorie di dati",
            "Il problema di ottimizzazione ammette una soluzione in forma chiusa",
            "La funzione di loss è tipicamente una distanza quadratica tra i valori predetti e quelli osservati",
            "cerca di stabilire una relazione tra i valori di una variabile di output e i valori di una o più features di input"
        ], correct: 0
    },

    {
        question: "Selezionare la sentenza scorretta relativa alla tecnica a discesa del gradiente",
        answers: [
            "Potrebbe convergere ad un minimo locale",
            "Può essere applicata solo se la funzione da minimizzare ha una superficie concava",
            "Il risultato può dipendere dalla inizializzazione dei parametri del modello",
            "È opportuno decrementare il learning rate verso la fine dell’apprendimento"
        ], correct: 1
    },

    {
        question: "Selezionare la sentenza errata relativa all’ “inception module”",
        answers: [
            "Sfrutta kernel di dimensione diversa",
            "Tende a ridurre il costo computazionale sfruttando convoluzioni unitarie per diminuire il numero dei canali",
            "Utilizza al proprio interno delle skip-connections per bypassare l’applicazione di parte dei kernel",
            "È un componente tipico della rete Inception-v3"
        ], correct: 2
    },

    {
        question: "Quale delle seguenti tecniche non può aiutare ad uscire dai minimi locali durante la fase di training?",
        answers: [
            "Ridurre la dimensione del minibatch",
            "Fare clipping del gradiente in un range prefissato",
            "Aumentare il learning rate",
            "Aggiungere un “momento” al gradiente, cioè parte del gradiente del passo precedente"
        ], correct: 1
    },

    {
        question: "Selezionare la sentenza SCORRETTA relativa alla Intersection overUnion (IoU)",
        answers: [
            "E' frequentemente utilizzata come misura di similitudine tra bounding boxes",
            "Restituisce un valore nel range [0,1]",
            "Non è una funzione simmetrica dei suoi input",
            "E' una metrica principalmente utilizzata nel campo della Object Detection"
        ], correct: 2
    },

    {
        question: "Quale è l'obiettivo principale dell'algortimo di clustering K-means?",
        answers: [
            "Ridurre il numero di clusters al minimo",
            "Trovare il punto medio del dataset",
            "Raggruppare i punti di un cluster attorno al loro centroide",
            "ottimizzare il numero dei clusters basandosi sulla distribuzione Gaussiana dei dati"
        ], correct: 2
    },

    {
        question: "Quale è lo scopo dell'optimizer in Tensorflow/Keras?",
        answers: [
            "definire l'algoritmo che calcola i gradienti della loss e aggiorna i pesi del modello",
            "salvare i migliori pesi del modello durante il processo di training",
            "contrastare l'overifitting",
            "aggiungere una penalità ai pesi del layer su cui viene istanziato"
        ], correct: 0
    },

    {
        question: "Selezionare la sentenza errata relativa ai transformers",
        answers: [
            "Hanno una tipica struttura encoder-decoder, ognuno formato da uno stack di sotto-componenti modulari",
            "Sono alla base delle reti della famiglia BERT e GPT",
            "Utilizzano pesantemente il meccanismo di attenzione",
            "Aggiungono ad ogni livello della rete un encoding posizionale per enfatizzare la posizione relativa dei tokens"
        ], correct: 0
    },

    {
        question: "Selezionare la sentenza SCORRETTA relativa all'overfitting",
        answers: [
            "Può essere particolarmente pericolosa per modelli altamenti espressivi",
            "L'acquisizione di nuovi dati di training non può che peggiorare la situazione",
            "Può essere contrastata con tecniche di regolarizzazione",
            "Può essere contrastata con la tecnica di early stopping durante la fase di training"
        ], correct: 1
    },

    {
        question: "Un training set è composto da 10000 dati. Se la batchsize è 50, quante volte verrà effettuata la backpropagation durante una singola epoca?",
        answers: [
            "50",
            "10000",
            "200",
            "Nessuna delle altre risposte è corretta"
        ], correct: 2
    },

    {
        question: "Selezionare la sentenza errata relativa ai modelli a diffusione",
        answers: [
            "Il risultato è ottenuto attraverso passaggi multipli lungo una singola rete, tipicamente una Unet.",
            "Generano i riusultati attraverso un processo di diffusione della informazione",
            "I modelli a diffusione iterano una operazione di denoising",
            "Tipicamente, lo spazio latente ha la stessa dimensione dello spazio visibile"
        ], correct: 1
    },

    {
        question: "Nella Principal Component Analysis, cosa indica la varianza spiegata da ciascuna componente?",
        answers: [
            "indica la correlazione tra ciascuna componente e la variabile target",
            "indica la deviazione standard della componente rispetto alla media dei dati",
            "indica quanto una singola componente contribuisce alla varianza complessiva dei dati",
            "misura la somma cumulativa delle differenze quadratiche tra le osservazioni e i valori predetti dalla componente"
        ], correct: 2
    },];



// Funzione per ottenere un numero casuale tra min e max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per selezionare casualmente un numero specifico di domande
function getRandomQuestions(questions, count) {
    var randomQuestions = [];
    var availableQuestions = questions.slice(); // Clona l'array per evitare modifiche laterali
    for (var i = 0; i < count; i++) {
        var randomIndex = getRandomInt(0, availableQuestions.length - 1);
        randomQuestions.push(availableQuestions.splice(randomIndex, 1)[0]);
    }
    return randomQuestions;
}

// Seleziona casualmente 30 domande
var questions = getRandomQuestions(allQuestions, 30);

var currentQuestionIndex = 0;
var correctAnswers = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    var question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;

    var answersHtml = "";
    for (var i = 0; i < question.answers.length; i++) {
        answersHtml += '<div class="answer" onclick="checkAnswer(' + i + ')">' + question.answers[i] + '</div>';
    }

    document.getElementById("answers").innerHTML = answersHtml;

    // Reset styles
    document.getElementById("quiz-container").classList.remove("correct", "incorrect");
    document.getElementById("result").innerText = "";

    // Enable clicks on answers
    var answerElements = document.querySelectorAll(".answer");
    for (var i = 0; i < answerElements.length; i++) {
        answerElements[i].style.pointerEvents = "auto";
    }

    // Hide navigation
    document.getElementById("navigation").style.display = "none";
}

function checkAnswer(answerIndex) {
    var question = questions[currentQuestionIndex];

    // Check if the answer is correct
    if (answerIndex === question.correct) {
        document.getElementById("quiz-container").classList.add("correct");
        document.getElementById("result").innerText = "Correct!";
        correctAnswers++;
    } else {
        document.getElementById("quiz-container").classList.add("incorrect");
        document.getElementById("result").innerText = "Incorrect. The correct answer is: " + question.answers[question.correct];
    }

    // Disable clicks on answers after answering
    var answerElements = document.querySelectorAll(".answer");
    for (var i = 0; i < answerElements.length; i++) {
        answerElements[i].style.pointerEvents = "none";
    }

    // Show the "Next" button
    document.getElementById("navigation").style.display = "block";

    // Check if it's the last question
    if (currentQuestionIndex === questions.length - 1) {
        showScore();
    }
}

function nextQuestion() {
    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // No more questions, end of the quiz
        showScore();
    }
}

function showScore() {
    document.getElementById("question").innerText = "Quiz completed!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText = "";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("score").innerText = "Your score: " + correctAnswers + " out of " + questions.length;
}

// Start the quiz when the page loads
startQuiz();