'use strict';

describe('Controller: EditorCtrl', function () {

    // load the controller's module
    beforeEach(module('meanMarkdownApp'));

    var EditorCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$controller_, _$rootScope_) {
        scope = _$rootScope_.$new();
        EditorCtrl = _$controller_('EditorCtrl', {
            $scope: scope
            // place here mocked dependencies
        });

    }));

    it('should have defined scope', function () {
        expect(scope).toBeDefined();
    });

    /*it('should initiate codemirror editor', function() {
        //expect(scope.showSuccess).toBe(false);
        
        scope.onCodeMirrorLoaded();
            
        expect(scope.editor).toBeDefined();
        //$scope.addSnippet
    }, 2000);*/

    /*it('should add given snippet to codemirror content', function () {
        //scope.codemirrorLoaded(_editor);
        //var content = "some content";
        //scope.editor.setValue(content);

        var snippet = "some *markdown* snippet!";
        scope.addSnippet(snippet);

        expect(EditorCtrl.editor.getValue()).toBe(content + snippet);

    });*/

    describe('definition functions', function() {
        
        it('should add new object to definitions array', function() {
            
            //scope.file.type = "testtype";
            scope.definitions = [{
                    _id: "definition1",
                    word: "Test"
                },{
                    _id: "definition2",
                    word: "Test2"
                }];

            expect(scope.definitions.length).toBe(2);

            // add new
            scope.onCreateDefinitionClick();

            expect(scope.definitions.length).toBe(3);
            //expect(scope.definitions[2]).toBe("testtype");

        });

    });
    

    

});
