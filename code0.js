gdjs.New_32SceneCode = {};
gdjs.New_32SceneCode.GDCloudObjects1= [];
gdjs.New_32SceneCode.GDCloudObjects2= [];
gdjs.New_32SceneCode.GDPlayerObjects1= [];
gdjs.New_32SceneCode.GDPlayerObjects2= [];
gdjs.New_32SceneCode.GDGrassPlatformObjects1= [];
gdjs.New_32SceneCode.GDGrassPlatformObjects2= [];
gdjs.New_32SceneCode.GDSmallBridgeObjects1= [];
gdjs.New_32SceneCode.GDSmallBridgeObjects2= [];
gdjs.New_32SceneCode.GDCoinObjects1= [];
gdjs.New_32SceneCode.GDCoinObjects2= [];
gdjs.New_32SceneCode.GDScoreObjects1= [];
gdjs.New_32SceneCode.GDScoreObjects2= [];
gdjs.New_32SceneCode.GDEnemyObjects1= [];
gdjs.New_32SceneCode.GDEnemyObjects2= [];
gdjs.New_32SceneCode.GDLeftObjects1= [];
gdjs.New_32SceneCode.GDLeftObjects2= [];
gdjs.New_32SceneCode.GDRightObjects1= [];
gdjs.New_32SceneCode.GDRightObjects2= [];
gdjs.New_32SceneCode.GDCheckpointObjects1= [];
gdjs.New_32SceneCode.GDCheckpointObjects2= [];
gdjs.New_32SceneCode.GDEndObjects1= [];
gdjs.New_32SceneCode.GDEndObjects2= [];
gdjs.New_32SceneCode.GDendtextObjects1= [];
gdjs.New_32SceneCode.GDendtextObjects2= [];

gdjs.New_32SceneCode.conditionTrue_0 = {val:false};
gdjs.New_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32SceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32SceneCode.GDPlayerObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32SceneCode.GDCoinObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32SceneCode.GDEnemyObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.New_32SceneCode.GDLeftObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32SceneCode.GDEnemyObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.New_32SceneCode.GDRightObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32SceneCode.GDPlayerObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32SceneCode.GDEnemyObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32SceneCode.GDPlayerObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.New_32SceneCode.GDEnemyObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32SceneCode.GDPlayerObjects1});gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.New_32SceneCode.GDCheckpointObjects1});gdjs.New_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
gdjs.New_32SceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.New_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
gdjs.New_32SceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.New_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 10.aac", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32SceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32SceneCode.GDEnemyObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDEnemyObjects1[i].getVariableString(gdjs.New_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDEnemyObjects1[k] = gdjs.New_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDEnemyObjects1.length = k;}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.New_32SceneCode.GDLeftObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{


gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.New_32SceneCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.New_32SceneCode.GDRightObjects1);
{for(var i = 0, len = gdjs.New_32SceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.New_32SceneCode.GDRightObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].returnVariable(gdjs.New_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
gdjs.New_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CheckpointY")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.New_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
gdjs.New_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32SceneCode.GDPlayerObjects1[k] = gdjs.New_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32SceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDEnemyObjects1 */
/* Reuse gdjs.New_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.New_32SceneCode.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);

gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDPlayerObjects1Objects, gdjs.New_32SceneCode.mapOfGDgdjs_46New_9532SceneCode_46GDCheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32SceneCode.GDCheckpointObjects1 */
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.New_32SceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.New_32SceneCode.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.New_32SceneCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.New_32SceneCode.GDCheckpointObjects1[0].getPointY("")));
}}

}


{


gdjs.New_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32SceneCode.GDPlayerObjects1);
{runtimeScene.getVariables().get("CheckpointX").setNumber((( gdjs.New_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32SceneCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("CheckpointY").setNumber((( gdjs.New_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32SceneCode.GDPlayerObjects1[0].getPointY("")));
}}

}


};

gdjs.New_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32SceneCode.GDCloudObjects1.length = 0;
gdjs.New_32SceneCode.GDCloudObjects2.length = 0;
gdjs.New_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32SceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.New_32SceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.New_32SceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.New_32SceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.New_32SceneCode.GDCoinObjects1.length = 0;
gdjs.New_32SceneCode.GDCoinObjects2.length = 0;
gdjs.New_32SceneCode.GDScoreObjects1.length = 0;
gdjs.New_32SceneCode.GDScoreObjects2.length = 0;
gdjs.New_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.New_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.New_32SceneCode.GDLeftObjects1.length = 0;
gdjs.New_32SceneCode.GDLeftObjects2.length = 0;
gdjs.New_32SceneCode.GDRightObjects1.length = 0;
gdjs.New_32SceneCode.GDRightObjects2.length = 0;
gdjs.New_32SceneCode.GDCheckpointObjects1.length = 0;
gdjs.New_32SceneCode.GDCheckpointObjects2.length = 0;
gdjs.New_32SceneCode.GDEndObjects1.length = 0;
gdjs.New_32SceneCode.GDEndObjects2.length = 0;
gdjs.New_32SceneCode.GDendtextObjects1.length = 0;
gdjs.New_32SceneCode.GDendtextObjects2.length = 0;

gdjs.New_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32SceneCode'] = gdjs.New_32SceneCode;
