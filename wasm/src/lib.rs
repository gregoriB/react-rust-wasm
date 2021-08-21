use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn create_greeting(name: &str) -> String {
    format!("Hello, {}!", name)
}