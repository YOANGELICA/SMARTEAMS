<template>
    <div class="test-container">
        <ol>
            <li>
                <p> Generalmente no me acerco a los problemas en forma creativa. </p>
                <label for="1"> Estoy en desacuerdo </label>
                <input type="radio" id="one" :value="1" v-model.number="q1" />
                <input type="radio" id="two" :value="2" v-model.number="q1" /> 
                <input type="radio" id="two" :value="3" v-model.number="q1" />
                <input type="radio" id="two" :value="4" v-model.number="q1" /> 
                <input type="radio" id="two" :value="5" v-model.number="q1" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta probar y luego revisar mis ideas antes de generar la solución o el producto final.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q2" />
                <input type="radio" id="two" :value="2" v-model.number="q2" /> 
                <input type="radio" id="two" :value="3" v-model.number="q2" />
                <input type="radio" id="two" :value="4" v-model.number="q2" /> 
                <input type="radio" id="two" :value="5" v-model.number="q2" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta tomarme el tiempo para clarificar la naturaleza exacta del problema.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q3" />
                <input type="radio" id="two" :value="2" v-model.number="q3" /> 
                <input type="radio" id="two" :value="3" v-model.number="q3" />
                <input type="radio" id="two" :value="4" v-model.number="q3" /> 
                <input type="radio" id="two" :value="5" v-model.number="q3" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de tomar los pasos necesarios para poner mis ideas en acción.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q4" />
                <input type="radio" id="two" :value="2" v-model.number="q4" /> 
                <input type="radio" id="two" :value="3" v-model.number="q4" />
                <input type="radio" id="two" :value="4" v-model.number="q4" /> 
                <input type="radio" id="two" :value="5" v-model.number="q4" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta separar un problema amplio en partes para examinarlo desde todos los ángulos.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q5" />
                <input type="radio" id="two" :value="2" v-model.number="q5" /> 
                <input type="radio" id="two" :value="3" v-model.number="q5" />
                <input type="radio" id="two" :value="4" v-model.number="q5" /> 
                <input type="radio" id="two" :value="5" v-model.number="q5" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Tengo dificultad en tener ideas inusuales para resolver un problema. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q6" />
                <input type="radio" id="two" :value="2" v-model.number="q6" /> 
                <input type="radio" id="two" :value="3" v-model.number="q6" />
                <input type="radio" id="two" :value="4" v-model.number="q6" /> 
                <input type="radio" id="two" :value="5" v-model.number="q6s" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  Me gusta identificar los hechos más relevantes relativos al problema. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q7" />
                <input type="radio" id="two" :value="2" v-model.number="q7" /> 
                <input type="radio" id="two" :value="3" v-model.number="q7" />
                <input type="radio" id="two" :value="4" v-model.number="q7" /> 
                <input type="radio" id="two" :value="5" v-model.number="q7" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  No tengo el temperamento para tratar de aislar las causas específicas de un problema. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q8" />
                <input type="radio" id="two" :value="2" v-model.number="q8" /> 
                <input type="radio" id="two" :value="3" v-model.number="q8" />
                <input type="radio" id="two" :value="4" v-model.number="q8" /> 
                <input type="radio" id="two" :value="5" v-model.number="q8" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  Disfruto al generar formas únicas de mirar a un problema. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q9" />
                <input type="radio" id="two" :value="2" v-model.number="q9" /> 
                <input type="radio" id="two" :value="3" v-model.number="q9" />
                <input type="radio" id="two" :value="4" v-model.number="q9" /> 
                <input type="radio" id="two" :value="5" v-model.number="q9" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  Me gusta generar todos los pros y los contras de una solución potencial. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q10" />
                <input type="radio" id="two" :value="2" v-model.number="q10" /> 
                <input type="radio" id="two" :value="3" v-model.number="q10" />
                <input type="radio" id="two" :value="4" v-model.number="q10" /> 
                <input type="radio" id="two" :value="5" v-model.number="q10" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  Antes de implementar una solución me gusta separarla por pasos. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q11" />
                <input type="radio" id="two" :value="2" v-model.number="q11" /> 
                <input type="radio" id="two" :value="3" v-model.number="q11" />
                <input type="radio" id="two" :value="4" v-model.number="q11" /> 
                <input type="radio" id="two" :value="5" v-model.number="q11" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Transformar ideas en acción no es lo que más disfruto. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q12" />
                <input type="radio" id="two" :value="2" v-model.number="q12" /> 
                <input type="radio" id="two" :value="3" v-model.number="q12" />
                <input type="radio" id="two" :value="4" v-model.number="q12" /> 
                <input type="radio" id="two" :value="5" v-model.number="q12" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta generar el criterio que pueda ser usado para identificar la mejor opción u opciones. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q13" />
                <input type="radio" id="two" :value="2" v-model.number="q13" /> 
                <input type="radio" id="two" :value="3" v-model.number="q13" />
                <input type="radio" id="two" :value="4" v-model.number="q13" /> 
                <input type="radio" id="two" :value="5" v-model.number="q13" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de pasar tiempo profundizando el análisis inicial del problema.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q14" />
                <input type="radio" id="two" :value="2" v-model.number="q14" /> 
                <input type="radio" id="two" :value="3" v-model.number="q14" />
                <input type="radio" id="two" :value="4" v-model.number="q14" /> 
                <input type="radio" id="two" :value="5" v-model.number="q14" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Por naturaleza, no paso mucho tiempo enfocándome en definir el problema exacto a resolver.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q15" />
                <input type="radio" id="two" :value="2" v-model.number="q15" /> 
                <input type="radio" id="two" :value="3" v-model.number="q15" />
                <input type="radio" id="two" :value="4" v-model.number="q15" /> 
                <input type="radio" id="two" :value="5" v-model.number="q15" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta entender una situación al mirar el panorama general.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q16" />
                <input type="radio" id="two" :value="2" v-model.number="q16" /> 
                <input type="radio" id="two" :value="3" v-model.number="q16" />
                <input type="radio" id="two" :value="4" v-model.number="q16" /> 
                <input type="radio" id="two" :value="5" v-model.number="q16" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de trabajar en problemas mal definidos y novedosos.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q17" />
                <input type="radio" id="two" :value="2" v-model.number="q17" /> 
                <input type="radio" id="two" :value="3" v-model.number="q17" />
                <input type="radio" id="two" :value="4" v-model.number="q17" /> 
                <input type="radio" id="two" :value="5" v-model.number="q17" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Cuando trabajo en un problema me gusta encontrar la mejor forma de enunciarlo.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q18" />
                <input type="radio" id="two" :value="2" v-model.number="q18" /> 
                <input type="radio" id="two" :value="3" v-model.number="q18" />
                <input type="radio" id="two" :value="4" v-model.number="q18" /> 
                <input type="radio" id="two" :value="5" v-model.number="q18" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de hacer que las cosas se concreten.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q19" />
                <input type="radio" id="two" :value="2" v-model.number="q19" /> 
                <input type="radio" id="two" :value="3" v-model.number="q19" />
                <input type="radio" id="two" :value="4" v-model.number="q19" /> 
                <input type="radio" id="two" :value="5" v-model.number="q19" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta enfocarme en enunciar un problema en forma precisa.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q20" />
                <input type="radio" id="two" :value="2" v-model.number="q20" /> 
                <input type="radio" id="two" :value="3" v-model.number="q20" />
                <input type="radio" id="two" :value="4" v-model.number="q20" /> 
                <input type="radio" id="two" :value="5" v-model.number="q20" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de usar mi imaginación para producir muchas ideas.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q21" />
                <input type="radio" id="two" :value="2" v-model.number="q21" /> 
                <input type="radio" id="two" :value="3" v-model.number="q21" />
                <input type="radio" id="two" :value="4" v-model.number="q21" /> 
                <input type="radio" id="two" :value="5" v-model.number="q21" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta enfocarme en la información clave de una situación desafiante. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q22" />
                <input type="radio" id="two" :value="2" v-model.number="q22" /> 
                <input type="radio" id="two" :value="3" v-model.number="q22" />
                <input type="radio" id="two" :value="4" v-model.number="q22" /> 
                <input type="radio" id="two" :value="5" v-model.number="q22" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de tomarme el tiempo para perfeccionar una idea. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q23" />
                <input type="radio" id="two" :value="2" v-model.number="q23" /> 
                <input type="radio" id="two" :value="3" v-model.number="q23" />
                <input type="radio" id="two" :value="4" v-model.number="q23" /> 
                <input type="radio" id="two" :value="5" v-model.number="q23" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me resulta difícil implementar mis ideas. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q24" />
                <input type="radio" id="two" :value="2" v-model.number="q24" /> 
                <input type="radio" id="two" :value="3" v-model.number="q24" />
                <input type="radio" id="two" :value="4" v-model.number="q24" /> 
                <input type="radio" id="two" :value="5" v-model.number="q24" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de transformar ideas en bruto en soluciones concretas. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q25" />
                <input type="radio" id="two" :value="2" v-model.number="q25" /> 
                <input type="radio" id="two" :value="3" v-model.number="q25" />
                <input type="radio" id="two" :value="4" v-model.number="q25" /> 
                <input type="radio" id="two" :value="5" v-model.number="q25" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta pensar en todas las cosas que necesito hacer para implementar una idea.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q26" />
                <input type="radio" id="two" :value="2" v-model.number="q26" /> 
                <input type="radio" id="two" :value="3" v-model.number="q26" />
                <input type="radio" id="two" :value="4" v-model.number="q26" /> 
                <input type="radio" id="two" :value="5" v-model.number="q26" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Realmente disfruto de implementar una idea. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q27" />
                <input type="radio" id="two" :value="2" v-model.number="q27" /> 
                <input type="radio" id="two" :value="3" v-model.number="q27" />
                <input type="radio" id="two" :value="4" v-model.number="q27" /> 
                <input type="radio" id="two" :value="5" v-model.number="q27" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Antes de avanzar me gusta tener una clara comprensión del problema. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q28" />
                <input type="radio" id="two" :value="2" v-model.number="q28" /> 
                <input type="radio" id="two" :value="3" v-model.number="q28" />
                <input type="radio" id="two" :value="4" v-model.number="q28" /> 
                <input type="radio" id="two" :value="5" v-model.number="q28" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Me gusta trabajar con ideas únicas.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q29" />
                <input type="radio" id="two" :value="2" v-model.number="q29" /> 
                <input type="radio" id="two" :value="3" v-model.number="q29" />
                <input type="radio" id="two" :value="4" v-model.number="q29" /> 
                <input type="radio" id="two" :value="5" v-model.number="q29" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de poner mis ideas en acción. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q30" />
                <input type="radio" id="two" :value="2" v-model.number="q30" /> 
                <input type="radio" id="two" :value="3" v-model.number="q30" />
                <input type="radio" id="two" :value="4" v-model.number="q30" /> 
                <input type="radio" id="two" :value="5" v-model.number="q30" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p>  Me gusta explorar las fortalezas y debilidades de una solución potencial. </p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q31" />
                <input type="radio" id="two" :value="2" v-model.number="q31" /> 
                <input type="radio" id="two" :value="3" v-model.number="q31" />
                <input type="radio" id="two" :value="4" v-model.number="q31" /> 
                <input type="radio" id="two" :value="5" v-model.number="q31" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de reunir información para identificar el origen de un problema en particular.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q32" />
                <input type="radio" id="two" :value="2" v-model.number="q32" /> 
                <input type="radio" id="two" :value="3" v-model.number="q32" />
                <input type="radio" id="two" :value="4" v-model.number="q32" /> 
                <input type="radio" id="two" :value="5" v-model.number="q32" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto el análisis y el esfuerzo que lleva transformar un concepto preliminar en una idea factible.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q33" />
                <input type="radio" id="two" :value="2" v-model.number="q33" /> 
                <input type="radio" id="two" :value="3" v-model.number="q33" />
                <input type="radio" id="two" :value="4" v-model.number="q33" /> 
                <input type="radio" id="two" :value="5" v-model.number="q33" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Mi tendencia natural no es generar muchas ideas para los problemas.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q34" />
                <input type="radio" id="two" :value="2" v-model.number="q34" /> 
                <input type="radio" id="two" :value="3" v-model.number="q34" />
                <input type="radio" id="two" :value="4" v-model.number="q34" /> 
                <input type="radio" id="two" :value="5" v-model.number="q34" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Disfruto de usar metáforas y analogías para generar nuevas ideas para los problemas.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q35" />
                <input type="radio" id="two" :value="2" v-model.number="q35" /> 
                <input type="radio" id="two" :value="3" v-model.number="q35" />
                <input type="radio" id="two" :value="4" v-model.number="q35" /> 
                <input type="radio" id="two" :value="5" v-model.number="q35" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Encuentro que tengo poca paciencia para el esfuerzo que lleva pulir y refinar una idea.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q36" />
                <input type="radio" id="two" :value="2" v-model.number="q36" /> 
                <input type="radio" id="two" :value="3" v-model.number="q36" />
                <input type="radio" id="two" :value="4" v-model.number="q36" /> 
                <input type="radio" id="two" :value="5" v-model.number="q36" /><label for="5"> Estoy de acuerdo</label>
            </li>
            <br/>
            <li>
                <p> Tiendo a buscar una solución rápida y luego implementarla.</p>
                <label for="1"> Estoy en desacuerdo </label> 
                <input type="radio" id="one" :value="1" v-model.number="q37" />
                <input type="radio" id="two" :value="2" v-model.number="q37" /> 
                <input type="radio" id="two" :value="3" v-model.number="q37" />
                <input type="radio" id="two" :value="4" v-model.number="q37" /> 
                <input type="radio" id="two" :value="5" v-model.number="q37" /><label for="5"> Estoy de acuerdo</label>
            </li>
        </ol>
        <button @click="findRole"> fin </button>
    </div>

    <div v-if= "this.mainRole == 'clarificador'">
        <p>tu rol principal es: clarificador</p>
    </div>
    <div v-else-if= "this.mainRole == 'ideador'">
        <p>tu rol principal es: ideador</p>
    </div>
    <div v-else-if= "this.mainRole == 'desarrollador'">
        <p>tu rol principal es: desarrollador</p>
    </div>
    <div v-else-if= "this.mainRole == 'implementador'">
        <p>tu rol principal es: implementador</p>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
    return {
      q1: 0, q2: 0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0, q11:0, q12:0, q13:0, q14:0, 
      q15:0, q16:0, q17:0, q18:0, q19:0, q20:0, q21:0, q22:0, q23:0, q24:0, q25:0, q26:0, q27:0,
      q28:0, q29:0, q30:0, q31:0, q32:0, q33:0, q34:0, q35:0, q36:0, q37:0,
      mainRole: this.mainRole,
      subRole: this.subRole
    }
  },
  methods:{
    findRole() {

        var roles = {}

        roles.clarificador = this.q3+ this.q7+ this.q8+ this.q15+ this.q18+ this.q20+ this.q22+ this.q28+ this.q30
        roles.ideador = this.q6+ this.q9+ this.q14+ this.q16+ this.q17+ this.q21+ this.q29+ this.q34+ this.q35
        roles.desarrollador = this.q2+ this.q5+ this.q10+ this.q11+ this.q13+ this.q23+ this.q31+ this.q33+ this.q36
        roles.implementador = this.q4+ this.q12+ this.q19 + this.q24+ this.q25+ this.q26+ this.q27+ this.q30+ this.q37

        // console.log(Object.keys(roles))
        // console.log(Object.values(roles))
                
        var arr = Object.values(roles);
        let max = arr.sort((a,b)=>a-b).reverse()[0];
        let sec = arr.sort((a,b)=>a-b).reverse()[1];

        // console.log(max, sec)

        var arr = Object.values(roles);
        var names = Object.keys(roles);

        let mainRole = names[arr.indexOf(max,0)]
        let subRole = names[arr.indexOf(sec,0)]

        console.log("rol principal: "+mainRole)
        console.log("rol secundario: "+subRole)

    }
  }
}
</script>

<style scoped>
.test-container{
    /* text-align: center; */
}

/* label{
    color: #000;
    font-weight: bold;
}
li, p{
    color: #FF5758;
    font-weight: bold;
} */

label{
    color: #FF5758;
    font-weight: bold;
    
}
li, p{
    color: #000;
    font-weight: bold;
}
</style>