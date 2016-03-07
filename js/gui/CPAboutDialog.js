export default function CPAboutDialog(parent) {
    var
        dialog = $(`
            <div class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title">ChickenPaint by Nicholas Sherlock / Chicken Smoothie</h4>
                        </div>
                        <div class="modal-body">
                            <p>
                                ChickenPaint is a translation of <a href="http://www.chibipaint.com/" target="_blank">ChibiPaint</a> from Java to JavaScript.<br>
                            </p>
                            <p>
                                ChibiPaint is Copyright (c) 2006-2008 Marc Schefer. All Rights Reserved.<br>
                            </p>
                            <p>
                                ChickenPaint is free software: you can redistribute it and/or modify
                                it under the terms of the GNU General Public License as published by
                                the Free Software Foundation, either version 3 of the License, or
                                (at your option) any later version.
                            </p>
        
                            <p>
                                ChickenPaint is distributed in the hope that it will be useful,
                                but WITHOUT ANY WARRANTY; without even the implied warranty of
                                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                <a target="_blank" href="http://www.gnu.org/licenses/">GNU General Public License</a> for more details.
                            </p>
                            
                            <p>
                                You can <a target="_blank" href="http://github.com/">download the sourcecode for ChickenPaint here.</a>
                            </p>
        
                            <pre class="pre-scrollable">Includes icons from the <a href="http://tango.freedesktop.org/" target="_blank">Tango Desktop Project</a>
                    
Includes the <a target="_blank" href="https://github.com/eligrey/FileSaver.js">FileSaver.js library</a>
                    
    FileSaver.js Copyright © 2015 <a target="_blank" href="http://eligrey.com/">Eli Grey</a>

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

Includes the <a href="http://www.jquery.com/" target="_blank">JQuery library</a>

    Copyright <a href="https://jquery.org/" target="_blank">jQuery Foundation and other contributors</a>
    
    This software consists of voluntary contributions made by many
    individuals. For exact contribution history, see the revision 
    history available at https://github.com/jquery/jquery
    
    The following license applies to all parts of this software 
    except as documented below:
    
    Permission is hereby granted, free of charge, to any person 
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use, 
    copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

Includes the <a target="_blank" href="https://github.com/nodeca/pako">Pako zlib compression library</a>

    Copyright (C) 2014-2015 by Vitaly Puzrin
    
    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
                    </pre>
                </div>
            </div>
        </div>
    `);
    
    parent.appendChild(dialog[0]);
    
    this.show = function() {
        dialog.modal("show");
    };
}