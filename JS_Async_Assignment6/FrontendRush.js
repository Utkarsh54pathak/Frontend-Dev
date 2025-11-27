function designStage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🖌️ Designing...");
            resolve();
        }, 1000);
    });
}

function buildStage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🏗️ Building...");
            resolve();
        }, 1000);
    });
}

function testStage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🧪 Testing...");
            resolve();
        }, 1000);
    });
}

function deployStage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🚀 Deploying...");
            resolve();
        }, 1000);
    });
}

function celebrateStage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🎉 Celebration Time!");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await designStage();
    await buildStage();
    await testStage();
    await deployStage();
    await celebrateStage();

    console.log("✔ Pipeline Completed (Async/Await Version)");
}

runPipeline();
