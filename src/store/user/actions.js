export const registrarRol = async(context, data) => {
    context.commit('agregarRol', data);
}