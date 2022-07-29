# Per l'installazone 

Scaricare docker ed entrare dentro la directory dell file, una volta entrati, eseguire la seguente riga di comando 

### `docker-compose up`

## Api 

## Api senza parametri 
`http://localhost:3000/weather/`

Se non viene passato nessun valore automaticamente prenderà le città inserire nel file .env 

esempio di api con paramentro get: 
`http://localhost:3000/weather/?citysQuery=milano`

# In assenza di Docker 
in assenza di dokcer è possible far partire l'installazione, utilizzando `nvm install 16.16` eseguire `npm install` e per far partire il programma `npm run dev ` 